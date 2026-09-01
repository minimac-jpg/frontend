import type { PaginatedResponse, Project } from "../types/project";
import { apiClient } from "./client";

export async function listProjects(
  token: string,
  page = 1,
  pageSize = 20,
): Promise<PaginatedResponse<Project>> {
  const data = await apiClient.get<Project[] | PaginatedResponse<Project>>(
    `/projects?page=${page}&pageSize=${pageSize}`,
    token,
  );
  // Normalize: controller returns array, UI expects { items, total }
  if (Array.isArray(data)) {
    return { items: data, total: data.length, page, pageSize };
  }
  return data;
}

export async function getProject(id: string, token: string): Promise<Project> {
  return apiClient.get<Project>(`/projects/${id}`, token);
}

export async function createProject(
  data: { name: string; description: string },
  token: string,
): Promise<Project> {
  return apiClient.post<Project>("/projects", data, token);
}

export async function updateProject(
  id: string,
  data: { name?: string; description?: string },
  token: string,
): Promise<Project> {
  return apiClient.put<Project>(`/projects/${id}`, data, token);
}

export async function deleteProject(id: string, token: string): Promise<void> {
  return apiClient.delete<void>(`/projects/${id}`, token);
}
