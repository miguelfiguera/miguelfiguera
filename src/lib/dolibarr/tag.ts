/**
 * Etiqueta de origen para diferenciar en Dolibarr todos los registros
 * creados desde el portfolio (miguelfiguera2.0).
 *
 * Atribución triple, alineada con PLAN-DOLIBARR.md:
 *  - Categoría de tercero `mdev` (DOLIBARR_CATEGORY_ID).
 *  - Extrafield `origen_negocio = mdev` en el tercero.
 *  - Prefijo `[MDEV]` en note_private y `ref_ext` `MDEV:<slug>`.
 *
 * Configurable vía las variables DOLIBARR_SOURCE_TAG y DOLIBARR_CATEGORY_ID.
 */
export function getSourceTag(): string {
  return process.env.DOLIBARR_SOURCE_TAG?.trim() || "MDEV";
}

/** Valor del extrafield origen_negocio (opciones: dldev / cenit / mdev). */
export function getOrigenNegocio(): string {
  return getSourceTag().toLowerCase();
}

/** ID de la categoría de terceros en Dolibarr (tag `mdev`). */
export function getCategoryId(): number {
  const raw = Number(process.env.DOLIBARR_CATEGORY_ID);
  return Number.isInteger(raw) && raw > 0 ? raw : 3;
}

/** Construye una nota privada con la etiqueta de origen al inicio. */
export function buildTaggedNote(lines: Array<string | null | undefined>): string {
  const tag = getSourceTag();
  const body = lines.filter(Boolean).join("\n");
  return [`[${tag}] Origen: Portfolio miguelfiguera`, "", body].join("\n").trim();
}

/** Referencia externa única-ish para el tercero, prefijada con la etiqueta. */
export function buildRefExt(seed: string): string {
  const tag = getSourceTag();
  const slug = seed
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
  return `${tag}:${slug || "lead"}`;
}
