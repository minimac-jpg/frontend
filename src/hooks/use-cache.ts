import { useQuery } from "@tanstack/react-query";
import * as cacheApi from "../api/cache";
import { useAuth } from "./use-auth";

export function useCacheEntries(limit = 50) {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["cacheEntries", limit],
    queryFn: () => cacheApi.listCacheEntries(),
    enabled: isAuthenticated,
  });
}
