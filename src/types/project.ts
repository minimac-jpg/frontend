export interface ProjectOwner {
  user_id: string;
  display_name: string;
}

export interface Project {
  id: string;
  tenant_id: string;
  name: string;
  status: string;
  description?: string;
  owner: ProjectOwner;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
