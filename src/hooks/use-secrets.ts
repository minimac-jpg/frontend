import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSecret,
  deleteSecret,
  getSecret,
  getSecretUsage,
  listSecrets,
  rotateSecret,
  updateSecret,
} from "@/api/secrets";
import { useAuthStore } from "@/state/auth-store";
import type { CreateSecretRequest, UpdateSecretRequest } from "@/types/secret";

export function useSecrets(limit = 20) {
  const { isAuthenticated } = useAuthStore();
  return useQuery({
    queryKey: ["secrets", limit],
    queryFn: () => listSecrets(limit),
    enabled: isAuthenticated,
  });
}

export function useSecret(id: string) {
  const { isAuthenticated } = useAuthStore();
  return useQuery({
    queryKey: ["secrets", id],
    queryFn: () => getSecret(id),
    enabled: isAuthenticated && !!id,
  });
}

export function useCreateSecret() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSecretRequest) => createSecret(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["secrets"] });
    },
  });
}

export function useUpdateSecret(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSecretRequest) => updateSecret(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["secrets"] });
      queryClient.invalidateQueries({ queryKey: ["secrets", id] });
    },
  });
}

export function useDeleteSecret() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteSecret(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["secrets"] });
    },
  });
}

export function useRotateSecret() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, reason }: { id: string; reason?: string }) => rotateSecret(id, reason),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["secrets"] });
      queryClient.invalidateQueries({ queryKey: ["secrets", variables.id] });
    },
  });
}

export function useSecretUsage(id: string) {
  const { isAuthenticated } = useAuthStore();
  return useQuery({
    queryKey: ["secrets", id, "usage"],
    queryFn: () => getSecretUsage(id),
    enabled: isAuthenticated && !!id,
  });
}
