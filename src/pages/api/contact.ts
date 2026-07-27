import type { APIRoute } from "astro";
import { get, post } from "@/lib/dolibarr/client";
import type { DolibarrThirdParty, DolibarrContact, ContactFormInput } from "@/lib/dolibarr/types";
import { buildTaggedNote, buildRefExt, getOrigenNegocio, getCategoryId } from "@/lib/dolibarr/tag";

export const prerender = false;

const MAX_FIELD = 500;
const MAX_MESSAGE = 4000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Busca un tercero existente por email para no duplicar leads. */
async function findThirdPartyByEmail(email: string): Promise<number | null> {
  const safe = email.replace(/'/g, "").toLowerCase();
  try {
    const found = await get<Array<{ id: string | number }>>(
      `/thirdparties?limit=1&sqlfilters=${encodeURIComponent(`(t.email:like:'${safe}')`)}`
    );
    if (Array.isArray(found) && found.length > 0) return Number(found[0].id);
  } catch {
    // 404 de Dolibarr cuando no hay resultados — se trata como "no existe".
  }
  return null;
}

export const POST: APIRoute = async ({ request }) => {
  let body: Partial<ContactFormInput>;

  try {
    body = (await request.json()) as Partial<ContactFormInput>;
  } catch {
    return json({ error: "Cuerpo JSON inválido" }, 400);
  }

  // Honeypot: los bots rellenan el campo oculto; respondemos OK sin crear nada.
  if (body.website) {
    return json({ success: true }, 201);
  }

  const { name, email, phone, subject, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return json({ error: "Faltan campos requeridos: name, email, message" }, 400);
  }
  if (!EMAIL_RE.test(email) || email.length > MAX_FIELD) {
    return json({ error: "Email inválido" }, 400);
  }
  if (name.length > MAX_FIELD || (subject ?? "").length > MAX_FIELD || (phone ?? "").length > 64) {
    return json({ error: "Campo demasiado largo" }, 400);
  }
  if (message.length > MAX_MESSAGE) {
    return json({ error: "Mensaje demasiado largo" }, 400);
  }

  const note = buildTaggedNote([
    `Nombre: ${name}`,
    `Email: ${email}`,
    phone ? `Teléfono: ${phone}` : null,
    subject ? `Asunto: ${subject}` : null,
    `Mensaje: ${message}`,
  ]);

  try {
    // 1. Reutilizar el tercero si ya existe (dedupe por email)
    let socid = await findThirdPartyByEmail(email);
    let isNew = false;

    if (!socid) {
      const thirdParty: DolibarrThirdParty = {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        client: 2, // prospecto
        code_client: "auto",
        ref_ext: buildRefExt(email),
        note_private: note,
        array_options: {
          options_origen_negocio: getOrigenNegocio(),
          options_landing_form: "contact",
        },
      };
      const created = await post<number | { id: number }>("/thirdparties", thirdParty);
      socid = typeof created === "number" ? created : created.id;
      isNew = true;

      // 2. Contacto vinculado al tercero
      const parts = name.trim().split(/\s+/);
      const contact: DolibarrContact = {
        socid,
        firstname: parts[0],
        lastname: parts.slice(1).join(" ") || "-",
        email: email.trim(),
        phone_mobile: phone?.trim(),
      };
      await post("/contacts", contact).catch(() => {
        // El lead ya existe como tercero; el contacto es secundario.
      });

      // 3. Categoría `mdev` (atribución de origen por tag)
      await post(`/categories/${getCategoryId()}/objects/customer/${socid}`, {}).catch(() => {
        // Si falla el tag, el extrafield origen_negocio sigue marcando el origen.
      });
    }

    // 4. Evento de seguimiento para que el lead nunca quede sin atender
    await post("/agendaevents", {
      label: `[${getOrigenNegocio().toUpperCase()}] Contactar lead: ${name.trim()}`,
      type_code: "AC_OTH_AUTO",
      datep: Math.floor(Date.now() / 1000),
      note_private: note,
      socid,
      userownerid: 1,
      percentage: 0,
    }).catch(() => {
      // El tercero ya quedó registrado; el evento es best-effort.
    });

    return json({ success: true, id: socid, existing: !isNew }, 201);
  } catch (err) {
    console.error("[api/contact] Dolibarr error:", err);
    return json({ error: "No se pudo registrar el mensaje. Intenta de nuevo." }, 502);
  }
};
