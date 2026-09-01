export interface Worker {
  id: string;
  name: string;
  status: string;
  capabilities: string[];
  lastSeen: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
