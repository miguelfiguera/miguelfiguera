const TIMEOUT_MS = 10_000;

// Read at runtime (Node SSR) so secrets are never baked into the build/image.
function getConfig(): { baseUrl: string; apiKey: string } {
  const baseUrl = process.env.DOLIBARR_URL;
  const apiKey = process.env.DOLIBARR_API_KEY;
  if (!baseUrl || !apiKey) {
    throw new Error(
      "Dolibarr no está configurado: faltan DOLIBARR_URL y/o DOLIBARR_API_KEY."
    );
  }
  return { baseUrl: baseUrl.replace(/\/$/, ""), apiKey };
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const { baseUrl, apiKey } = getConfig();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const url = `${baseUrl}/api/index.php${path}`;
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        DOLAPIKEY: apiKey,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const text = await response.text().catch(() => response.statusText);
      throw new Error(`Dolibarr API error ${response.status}: ${text}`);
    }

    return response.json() as Promise<T>;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("La solicitud tardó demasiado. Por favor intenta de nuevo.");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

export function get<T>(path: string): Promise<T> {
  return request<T>(path, { method: "GET" });
}

export function post<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
