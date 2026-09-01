import { apiGet } from "../lib/api/client";
import type { CacheEntry, PaginatedResponse } from "../types/cache";

interface BackendCacheEntryDto {
  key: string;
  tenant_id: string;
  scope: string;
  size_bytes: number;
  checksum: string;
  created_at: string;
  last_accessed_at: string;
  hits: number;
  expires_at?: string | null;
}

function mapCacheEntry(dto: BackendCacheEntryDto): CacheEntry {
  const expired = dto.expires_at ? new Date(dto.expires_at).getTime() <= Date.now() : false;
  return {
    cache_id: dto.key,
    key: dto.key,
    kind: "build",
    status: expired ? "expired" : "active",
    size_bytes: dto.size_bytes,
    checksum: dto.checksum ?? null,
    scope: dto.scope,
    project_id: null,
    repository_id: null,
    branch: null,
    build_id: null,
    access_count: dto.hits,
    immutable: false,
    compressed: false,
    created_at: dto.created_at,
    last_used_at: dto.last_accessed_at,
  };
}

export async function listCacheEntries(scope = "default"): Promise<PaginatedResponse<CacheEntry>> {
  const data = await apiGet<{ entries: BackendCacheEntryDto[] }>(
    `/api/cache/${encodeURIComponent(scope)}`,
  );
  const items = (data.entries ?? []).map(mapCacheEntry);
  return { items, total: items.length };
}
