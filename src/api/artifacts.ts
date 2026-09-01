import type { Artifact, PaginatedResponse } from "../types/artifact";
import { apiClient } from "./client";

export async function listArtifacts(
  token: string,
  buildId?: string,
  limit = 50,
): Promise<PaginatedResponse<Artifact>> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (buildId) {
    params.set("build_id", buildId);
  }
  const data = await apiClient.get<Artifact[]>(`/artifacts?${params.toString()}`, token);
  if (Array.isArray(data)) {
    return { items: data, total: data.length };
  }
  return { items: [], total: 0 };
}

export async function getArtifact(id: string, token: string): Promise<Artifact> {
  return apiClient.get<Artifact>(`/artifacts/${id}`, token);
}

export async function downloadArtifact(
  id: string,
  token: string,
): Promise<{ data: Blob; contentType: string; filename: string }> {
  const response = await fetch(`/api/artifacts/${id}/download`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    // Try to parse error response
    try {
      const errorBody = await response.json();
      throw new Error(errorBody.error?.message || `Download failed: ${response.status}`);
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new Error(`Download failed: ${response.status}`);
      }
      throw e;
    }
  }

  const contentType = response.headers.get("content-type") ?? "application/octet-stream";
  const contentDisposition = response.headers.get("content-disposition") ?? "";
  const filename = extractFilename(contentDisposition) ?? `artifact-${id.slice(0, 8)}`;

  const data = await response.blob();
  return { data, contentType, filename };
}


export async function deleteArtifact(id: string, token: string): Promise<void> {
  await apiClient.delete<void>(`/artifacts/${id}`, token);
}

function extractFilename(contentDisposition: string): string | null {
  const match = contentDisposition.match(/filename="?([^";\n]+)"?/);
  if (match?.[1]) {
    return match[1];
  }
  return null;
}
