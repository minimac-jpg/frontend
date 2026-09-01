import type { PaginatedResponse, Worker } from "../types/worker";
import { apiClient } from "./client";

export async function listWorkers(
  token: string,
  page = 1,
  pageSize = 20,
): Promise<PaginatedResponse<Worker>> {
  const data = await apiClient.get<
    { workers: Worker[]; total: number } | Worker[] | PaginatedResponse<Worker>
  >(`/workers?page=${page}&pageSize=${pageSize}`, token);
  if (Array.isArray(data)) {
    return { items: data, total: data.length, page, pageSize };
  }
  if (data && "workers" in data) {
    return { items: data.workers, total: data.total, page, pageSize };
  }
  return data as PaginatedResponse<Worker>;
}

export async function getWorker(id: string, token: string): Promise<Worker> {
  return apiClient.get<Worker>(`/workers/${id}`, token);
}

export async function drainWorker(id: string, token: string): Promise<void> {
  return apiClient.post<void>(`/workers/${id}/drain`, {}, token);
}

export async function removeWorker(id: string, token: string): Promise<void> {
  return apiClient.delete<void>(`/workers/${id}`, token);
}
