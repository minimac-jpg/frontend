import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as workersApi from "../api/workers";
import { useAuth } from "./use-auth";

export function useWorkers(page = 1, pageSize = 20) {
  const { token, isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["workers", page, pageSize],
    queryFn: () => workersApi.listWorkers(token!, page, pageSize),
    enabled: isAuthenticated,
  });
}


export function useDrainWorker() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => workersApi.drainWorker(id, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workers"] });
    },
  });
}

export function useRemoveWorker() {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => workersApi.removeWorker(id, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workers"] });
    },
  });
}
