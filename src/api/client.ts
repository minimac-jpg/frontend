import { apiConfig } from "../config/api-config";
import { ApiError } from "./errors";

interface RequestOptions {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
  token?: string;
}


export class ApiClient {
  private baseUrl: string;
  private timeout: number;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ?? apiConfig.baseUrl;
    this.timeout = apiConfig.timeout;
  }

  private async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const { method = "GET", body, headers = {} } = options;

    const requestHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...headers,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      // `credentials: 'include'` ensures httpOnly session cookies are sent
      // with every request, replacing the previous Authorization header flow.
      const response = await fetch(`${this.baseUrl}${path}`, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
        credentials: "include",
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorBody = await response.text();
        throw new ApiError(response.status, response.statusText, errorBody);
      }

      const text = await response.text();
      if (!text) {
        return undefined as T;
      }
      const json = JSON.parse(text) as unknown;
      // Unwrap { success, data } envelope if present
      if (json && typeof json === "object" && "success" in json && "data" in json) {
        return (json as { data: T }).data;
      }
      return json as T;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, "Network error", String(error));
    }
  }

  async get<T>(path: string, _token?: string): Promise<T> {
    return this.request<T>(path);
  }

  async post<T>(path: string, body?: unknown, _token?: string): Promise<T> {
    return this.request<T>(path, { method: "POST", body });
  }

  async put<T>(path: string, body: unknown, _token?: string): Promise<T> {
    return this.request<T>(path, { method: "PUT", body });
  }

  async patch<T>(path: string, body: unknown, _token?: string): Promise<T> {
    return this.request<T>(path, { method: "PATCH", body });
  }

  async delete<T>(path: string, _token?: string): Promise<T> {
    return this.request<T>(path, { method: "DELETE" });
  }
}

export { ApiError } from "./errors";

export const apiClient = new ApiClient();
