export interface Secret {
  id: string;
  name: string;
  kind: string;
  status: string;
  scope: string;
  owner: string;
  provider: string;
  external_reference: string;
  current_version: number;
  is_rotating: boolean;
  created_at: string;
  updated_at: string;
  value?: string;
  folder?: string;
  project?: string;
}

export interface SecretListResponse {
  items: Secret[];
  total: number;
}

export interface CreateSecretRequest {
  name: string;
  kind: string;
  label?: string;
  description?: string;
  tags?: string[];
  provider?: string;
  external_reference?: string;
  value?: string;
  folder?: string;
  project?: string;
}

export interface UpdateSecretRequest {
  name?: string;
  label?: string;
  description?: string;
  tags?: string[];
  status?: string;
  value?: string;
  folder?: string;
  project?: string;
}

export interface SecretUsageRecord {
  secret_id: string;
  used_by: string;
  used_for: string;
  used_at: string;
  build_id: string | null;
  pipeline_id: string | null;
}
