import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as pipelinesApi from "../api/pipelines";
import { useAuth } from "./use-auth";

export function usePipelines(projectId?: string, page = 1, pageSize = 20) {
  const { token, isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["pipelines", projectId, page, pageSize],
    queryFn: () => pipelinesApi.listPipelines(token!, projectId, page, pageSize),
    enabled: isAuthenticated,
  });
}

export function usePipeline(id: string) {
  const { token, isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["pipelines", id],
    queryFn: () => pipelinesApi.getPipeline(id, token!),
    enabled: isAuthenticated && !!id,
  });
}

export function useValidatePipeline() {
  const { token } = useAuth();

  return useMutation({
    mutationFn: ({ file }: { file: string }) => pipelinesApi.validatePipeline(file, token!),
  });
}

export function useCompilePipeline() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => pipelinesApi.compilePipeline(id, token!),
    onSuccess: (_result, id) => {
      queryClient.invalidateQueries({ queryKey: ["pipelines", id] });
    },
  });
}

export function useRunPipeline() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => pipelinesApi.runPipeline(id, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["builds"] });
    },
  });
}

