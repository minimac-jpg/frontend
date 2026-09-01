import type { Build, PaginatedResponse } from "../types/build";
import { apiClient } from "./client";

export async function listBuilds(
  token: string,
  pipelineId?: string,
  page = 1,
  pageSize = 20,
): Promise<PaginatedResponse<Build>> {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
  });
  if (pipelineId) {
    params.set("pipelineId", pipelineId);
  }
  const data = await apiClient.get<Build[] | PaginatedResponse<Build>>(
    `/builds?${params.toString()}`,
    token,
  );
  if (Array.isArray(data)) {
    return { items: data, total: data.length, page, pageSize };
  }
  return data;
}

export async function getBuild(id: string, token: string): Promise<Build> {
  return apiClient.get<Build>(`/builds/${id}`, token);
}

export async function cancelBuild(id: string, token: string): Promise<void> {
  return apiClient.post<void>(`/builds/${id}/cancel`, {}, token);
}

export async function retryBuild(id: string, token: string): Promise<Build> {
  return apiClient.post<Build>(`/builds/${id}/retry`, {}, token);
}
