export interface Credential {
  id: string;
  name: string;
  kind: string;
  status: string;
  scope: string;
  label: string;
  description: string | null;
  tags: string[];
  owner: string;
  created_at: string;
  updated_at: string;
  expires_at: string | null;
}

export interface CredentialListResponse {
  items: Credential[];
  total: number;
}

export interface CreateCredentialRequest {
  name: string;
  kind: string;
  label?: string;
  description?: string;
  tags?: string[];
}

export interface UpdateCredentialRequest {
  name?: string;
  label?: string;
  description?: string;
  tags?: string[];
  status?: string;
}

export interface CredentialUsageRecord {
  id: string;
  used_at: string;
  used_by: string;
  context: string;
  success: boolean;
}
