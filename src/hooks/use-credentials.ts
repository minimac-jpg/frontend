import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCredential, listCredentials } from "@/api/credentials";
import { useAuthStore } from "@/state/auth-store";
import type { CreateCredentialRequest } from "@/types/credentials";

export function useCredentials(limit = 20) {
  const { isAuthenticated } = useAuthStore();
  return useQuery({
    queryKey: ["credentials", limit],
    queryFn: () => listCredentials(limit),
    enabled: isAuthenticated,
  });
}

export function useCreateCredential() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCredentialRequest) => createCredential(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["credentials"] });
    },
  });
}
