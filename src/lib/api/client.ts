import { authClient } from "@/lib/auth-client";

export class ApiError extends Error {
  code: string;
  status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.status = status;
  }
}

interface SuccessEnvelope<T> {
  success: true;
  data: T;
}

interface ErrorEnvelopeBody {
  success: false;
  error: { code: string; message: string; status: number };
}

type Envelope<T> = SuccessEnvelope<T> | ErrorEnvelopeBody;

let cachedToken: string | null = null;

function clearTokenCache(): void {
  cachedToken = null;
}

async function fetchToken(): Promise<string> {
  if (cachedToken) return cachedToken;
  const { data, error } = await authClient.token();
  if (error || !data?.token) {
    throw new ApiError(
      error?.message ?? "Not authenticated — please sign in.",
      "AUTH_REQUIRED",
      401,
    );
  }
  cachedToken = data.token;
  return cachedToken;
}

function toApiError(payload: unknown, fallbackStatus: number): ApiError {
  if (
    typeof payload === "object" &&
    payload !== null &&
    "error" in payload &&
    typeof (payload as { error: unknown }).error === "object" &&
    (payload as { error: unknown }).error !== null
  ) {
    const body = (payload as ErrorEnvelopeBody).error;
    return new ApiError(
      body.message || "Request failed",
      body.code || "UNKNOWN",
      body.status || fallbackStatus,
    );
  }
  const legacyMessage =
    typeof payload === "object" && payload !== null && "error" in payload
      ? (payload as { error: unknown }).error
      : undefined;
  return new ApiError(
    typeof legacyMessage === "string" ? legacyMessage : "Request failed",
    "UNKNOWN",
    fallbackStatus,
  );
}

async function rawRequest(
  path: string,
  init: RequestInit | undefined,
  allowRetry: boolean,
): Promise<Response> {
  let token: string;
  try {
    token = await fetchToken();
  } catch (err) {
    clearTokenCache();
    if (err instanceof ApiError) throw err;
    throw new ApiError("Failed to obtain auth token", "AUTH_REQUIRED", 401);
  }

  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${token}`);
  if (typeof init?.body === "string" && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let response: Response;
  try {
    response = await fetch(path, { ...init, headers });
  } catch (err) {
    throw new ApiError(err instanceof Error ? err.message : "Network error", "NETWORK_ERROR", 0);
  }

  if (response.status === 401 && allowRetry) {
    clearTokenCache();
    return rawRequest(path, init, false);
  }

  return response;
}

async function request<T>(
  path: string,
  init: RequestInit | undefined,
  allowRetry: boolean,
): Promise<T> {
  let token: string;
  try {
    token = await fetchToken();
  } catch (err) {
    clearTokenCache();
    if (err instanceof ApiError) throw err;
    throw new ApiError("Failed to obtain auth token", "AUTH_REQUIRED", 401);
  }

  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${token}`);
  if (typeof init?.body === "string" && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let response: Response;
  try {
    response = await fetch(path, { ...init, headers });
  } catch (err) {
    throw new ApiError(err instanceof Error ? err.message : "Network error", "NETWORK_ERROR", 0);
  }

  if (response.status === 401 && allowRetry) {
    clearTokenCache();
    return request<T>(path, init, false);
  }

  let payload: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }
  }

  if (!response.ok) {
    throw toApiError(payload, response.status);
  }

  if (typeof payload === "object" && payload !== null && "success" in payload) {
    const envelope = payload as Envelope<T>;
    if (envelope.success) return envelope.data;
    throw toApiError(envelope, response.status);
  }

  return payload as T;
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  return request<T>(path, init, true);
}

export function apiGet<T>(path: string): Promise<T> {
  return apiFetch<T>(path);
}

/**
 * Fetch a binary endpoint (e.g. artifact downloads) with the auth token
 * attached, saving the response body as a file via an object URL.
 */
export async function apiDownload(path: string, filename: string): Promise<void> {
  const response = await rawRequest(path, { method: "GET" }, true);
  if (!response.ok) {
    let payload: unknown = null;
    const text = await response.text();
    if (text) {
      try {
        payload = JSON.parse(text);
      } catch {
        payload = null;
      }
    }
    throw toApiError(payload, response.status);
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

export function apiPost<T>(path: string, body?: unknown): Promise<T> {
  return apiFetch<T>(path, {
    method: "POST",
    body: body === undefined ? "{}" : JSON.stringify(body),
  });
}

export function apiPut<T>(path: string, body?: unknown): Promise<T> {
  return apiFetch<T>(path, {
    method: "PUT",
    body: body === undefined ? "{}" : JSON.stringify(body),
  });
}

export function apiPatch<T>(path: string, body?: unknown): Promise<T> {
  return apiFetch<T>(path, {
    method: "PATCH",
    body: body === undefined ? "{}" : JSON.stringify(body),
  });
}

export function apiDelete<T>(path: string): Promise<T> {
  return apiFetch<T>(path, { method: "DELETE" });
}
