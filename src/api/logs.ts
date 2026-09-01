import { apiClient } from "./client";

export interface LogChunk {
  sequence: number;
  timestamp: string;
  stream: string;
  content: string;
}

export interface LogQueryResponse {
  build_id: string;
  attempt: number;
  chunks: LogChunk[];
  has_more: boolean;
  next_cursor: number | null;
}

export async function getLogs(
  buildId: string,
  token: string,
  params?: { attempt?: number; cursor?: number; limit?: number },
): Promise<LogQueryResponse> {
  const searchParams = new URLSearchParams();
  if (params?.attempt !== undefined) searchParams.set("attempt", String(params.attempt));
  if (params?.cursor !== undefined) searchParams.set("cursor", String(params.cursor));
  if (params?.limit !== undefined) searchParams.set("limit", String(params.limit));

  const query = searchParams.toString();
  const path = `/builds/${buildId}/logs${query ? `?${query}` : ""}`;

  return apiClient.get<LogQueryResponse>(path, token);
}

export async function getRawLogs(
  buildId: string,
  token: string,
  params?: { attempt?: number; cursor?: number; limit?: number },
): Promise<string> {
  const searchParams = new URLSearchParams();
  if (params?.attempt !== undefined) searchParams.set("attempt", String(params.attempt));
  if (params?.cursor !== undefined) searchParams.set("cursor", String(params.cursor));
  if (params?.limit !== undefined) searchParams.set("limit", String(params.limit));

  const query = searchParams.toString();
  const path = `/builds/${buildId}/logs/raw${query ? `?${query}` : ""}`;

  const response = await fetch(`/api${path}${query ? `?${query}` : ""}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch raw logs: ${response.status}`);
  }

  return response.text();
}
