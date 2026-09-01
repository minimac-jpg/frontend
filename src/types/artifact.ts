export interface Artifact {
  artifact_id: string;
  build_id: string;
  task_id: string | null;
  step_id: string | null;
  name: string;
  kind: string;
  status: string;
  size_bytes: number;
  checksum: string | null;
  content_type: string | null;
  storage_key: string;
  created_at: string;
  expires_at: string | null;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
}

export interface UploadArtifactRequest {
  build_id: string;
  name: string;
  kind: string;
  size_bytes: number;
  checksum?: string;
  content_type?: string;
  step_id?: string;
  data_base64?: string;
}
