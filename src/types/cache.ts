export interface CacheEntry {
  cache_id: string;
  key: string;
  kind: string;
  status: string;
  size_bytes: number;
  checksum: string | null;
  scope: string;
  project_id: string | null;
  repository_id: string | null;
  branch: string | null;
  build_id: string | null;
  access_count: number;
  immutable: boolean;
  compressed: boolean;
  created_at: string;
  last_used_at: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}
