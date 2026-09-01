export type FormatType = "maven" | "npm" | "docker" | "pypi" | "nuget" | "generic";

export interface Checksum {
  sha256: string;
  sha1: string;
  md5: string;
}

export interface Asset {
  name: string;
  sizeBytes: number;
  contentType: string;
  downloadUrl: string;
}

interface ComponentDependent {
  name: string;
  version: string;
}

export interface Component {
  id: string;
  group: string;
  name: string;
  version: string;
  format: FormatType;
  repository: string;
  extension: string;
  sizeBytes: number;
  modifiedAt: string;
  createdAt: string;
  checksums: Checksum;
  assets: Asset[];
  dependents: ComponentDependent[];
  description: string | null;
}

export interface SearchFilters {
  query?: string;
  formats?: FormatType[];
  repository?: string;
  modifiedSince?: string;
  groupId?: string;
  artifactId?: string;
  version?: string;
  classifier?: string;
  extension?: string;
  checksum?: string;
  buildId?: string;
}

export type BackendArtifactStatus = "uploading" | "completed" | "failed" | "deleted";

export interface BackendArtifactDto {
  artifact_id: string;
  build_id: string;
  task_id?: string | null;
  step_id?: string | null;
  name: string;
  kind: string;
  status: BackendArtifactStatus;
  size_bytes: number;
  checksum?: string | null;
  content_type?: string | null;
  storage_key: string;
  created_at: string;
  expires_at?: string | null;
}

export interface RecentSearch {
  query: string;
  filters: SearchFilters;
  timestamp: string;
}

export interface UploadArtifactRequest {
  format: FormatType;
  repository: string;
  group: string;
  name: string;
  version: string;
  extension: string;
  description?: string;
  classifier?: string;
  buildId?: string;
  file?: File;
}
