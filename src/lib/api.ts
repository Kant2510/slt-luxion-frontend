const API_URL = process.env.NEXT_PUBLIC_API_URL;

type ApiRequestInit = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export async function apiFetch<T>(
  endpoint: string,
  options?: ApiRequestInit
): Promise<T> {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const isFormData =
    typeof FormData !== "undefined" && options?.body instanceof FormData;

  const customHeaders = options?.headers
    ? new Headers(options.headers)
    : new Headers();

  if (!isFormData && !customHeaders.has("Content-Type")) {
    customHeaders.set("Content-Type", "application/json");
  } else if (isFormData && customHeaders.has("Content-Type")) {
    customHeaders.delete("Content-Type");
  }

  const url = `${API_URL.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;
  const method = options?.method?.toUpperCase() ?? "GET";
  const fetchOptions: ApiRequestInit =
    method === "GET"
      ? {
          next: { revalidate: 3600 },
          ...options,
        }
      : options ?? {};

  const response = await fetch(url, {
    ...fetchOptions,
    headers: customHeaders,
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => null);
    const errorMessage =
      errData?.error ||
      errData?.message ||
      `API Error (${response.status})`;
    throw new Error(errorMessage);
  }

  return (await response.json()) as T;
}
