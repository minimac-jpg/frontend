import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as authApi from "../api/auth";
import { useAuthStore } from "../state/auth-store";
import type { LoginRequest } from "../types/auth";

export function useAuth() {
  const { user, isAuthenticated } = useAuthStore();
  const queryClient = useQueryClient();

  const sessionQuery = useQuery({
    queryKey: ["auth", "session"],
    queryFn: () => authApi.whoami(),
    retry: false,
    staleTime: 60_000,
  });

  const loginMutation = useMutation({
    mutationFn: (request: LoginRequest) =>
      authApi.login(request.email ?? "", request.password ?? ""),
    onSuccess: (data) => {
      queryClient.setQueryData(["auth", "session"], data);
      queryClient.invalidateQueries();
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      queryClient.setQueryData(["auth", "session"], null);
      queryClient.clear();
    },
  });

  return {
    token: null as string | null,
    user: user ?? sessionQuery.data ?? null,
    isAuthenticated: isAuthenticated || !!sessionQuery.data,
    isLoading: sessionQuery.isLoading && !user,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    loginError: loginMutation.error,
  };
}
