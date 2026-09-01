import type { PaginatedResponse, Pipeline } from "../types/pipeline";
import { apiClient } from "./client";

export async function listPipelines(
  token: string,
  projectId?: string,
  page = 1,
  pageSize = 20,
): Promise<PaginatedResponse<Pipeline>> {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
  });
  if (projectId) {
    params.set("projectId", projectId);
  }
  const data = await apiClient.get<Pipeline[] | PaginatedResponse<Pipeline>>(
    `/pipelines?${params.toString()}`,
    token,
  );
  if (Array.isArray(data)) {
    return { items: data, total: data.length, page, pageSize };
  }
  return data;
}

export async function getPipeline(id: string, token: string): Promise<Pipeline> {
  return apiClient.get<Pipeline>(`/pipelines/${id}`, token);
}

export async function validatePipeline(
  file: string,
  token: string,
): Promise<{ valid: boolean; errors: string[] }> {
  return apiClient.post<{ valid: boolean; errors: string[] }>(
    "/pipelines/validate",
    { file },
    token,
  );
}

export async function compilePipeline(id: string, token: string): Promise<Pipeline> {
  return apiClient.post<Pipeline>(`/pipelines/${id}/compile`, {}, token);
}

export async function runPipeline(id: string, token: string): Promise<{ buildId: string }> {
  return apiClient.post<{ buildId: string }>(`/pipelines/${id}/run`, {}, token);
}
