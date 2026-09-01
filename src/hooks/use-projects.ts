import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiDelete, apiGet, apiPost, apiPut } from "@/lib/api/client";
import type { Project, ProjectOwner } from "../types/project";

interface BackendProjectDto {
  id: string;
  tenant_id: string;
  name: string;
  status: string;
  owner: ProjectOwner;
  created_at: string;
  updated_at: string;
}

interface BackendProjectEnvelope {
  project: BackendProjectDto;
  settings?: unknown;
}

function mapProject(dto: BackendProjectDto): Project {
  return {
    id: dto.id,
    tenant_id: dto.tenant_id,
    name: dto.name,
    status: dto.status,
    owner: dto.owner,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
  };
}

export function useProjects(limit = 100) {
  return useQuery({
    queryKey: ["projects", limit],
    queryFn: async () => {
      const data = await apiGet<{ projects: BackendProjectDto[]; total: number }>(
        `/api/projects?offset=0&limit=${limit}`,
      );
      return { projects: (data.projects ?? []).map(mapProject), total: data.total };
    },
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; description?: string }) => {
      const envelope = await apiPost<BackendProjectEnvelope>("/api/projects", {
        name: data.name,
        ...(data.description ? { description: data.description } : {}),
      });
      return mapProject(envelope.project);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: { description?: string; tags?: string[] };
    }) => {
      const envelope = await apiPut<{ project: BackendProjectDto }>(
        `/api/projects/${encodeURIComponent(id)}`,
        data,
      );
      return mapProject(envelope.project);
    },
    onSuccess: (_result, variables) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects", variables.id] });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      apiDelete<{ message: string }>(`/api/projects/${encodeURIComponent(id)}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
