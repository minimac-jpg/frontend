import { apiDelete, apiGet, apiPatch, apiPost } from "@/lib/api/client";
import type {
  Credential,
  CredentialListResponse,
  CredentialUsageRecord,
} from "@/types/credentials";

interface BackendScopeDto {
  type: string;
  organization_id?: string;
  project_id?: string;
  repository_id?: string;
  environment?: string;
  pipeline_id?: string;
}

interface BackendCredentialSummaryDto {
  id: string;
  name: string;
  kind: string;
  status: string;
  label: string;
  provider: string;
  external_reference: string;
  version: number;
  created_at: string;
  updated_at: string;
  expires_at?: string | null;
}

interface BackendCredentialRecordDto extends BackendCredentialSummaryDto {
  scope?: BackendScopeDto;
  description?: string | null;
  tags?: string[];
  owner_user_id?: string;
  owner_service_name?: string;
}

interface BackendCredentialEnvelope {
  credential: BackendCredentialRecordDto;
}

interface BackendCredentialListDto {
  credentials: BackendCredentialRecordDto[];
  total: number;
}

interface BackendCredentialUsageDto {
  usage: CredentialUsageRecord[];
}

const CREDENTIAL_STATUSES = new Set(["active", "disabled", "rotating", "expired", "revoked"]);

function scopeLabel(scope: BackendScopeDto | undefined): string {
  if (!scope) return "global";
  switch (scope.type) {
    case "organization":
      return `organization:${scope.organization_id ?? ""}`;
    case "project":
      return `project:${scope.project_id ?? ""}`;
    case "repository":
      return `repository:${scope.project_id ?? ""}:${scope.repository_id ?? ""}`;
    case "environment":
      return `environment:${scope.project_id ?? ""}:${scope.environment ?? ""}`;
    case "pipeline":
      return `pipeline:${scope.project_id ?? ""}:${scope.pipeline_id ?? ""}`;
    default:
      return "global";
  }
}

function mapCredential(dto: BackendCredentialRecordDto): Credential {
  return {
    id: dto.id,
    name: dto.name,
    kind: dto.kind,
    status: dto.status,
    scope: scopeLabel(dto.scope),
    label: dto.label ?? "",
    description: dto.description ?? null,
    tags: dto.tags ?? [],
    owner: dto.owner_user_id ?? dto.owner_service_name ?? "",
    created_at: dto.created_at,
    updated_at: dto.updated_at,
    expires_at: dto.expires_at ?? null,
  };
}

export async function listCredentials(_limit = 20): Promise<CredentialListResponse> {
  const data = await apiGet<BackendCredentialListDto>("/api/credentials");
  const credentials = (data.credentials ?? []).map(mapCredential);
  return { items: credentials, total: data.total ?? credentials.length };
}

export async function getCredential(id: string): Promise<Credential> {
  const data = await apiGet<BackendCredentialEnvelope>(
    `/api/credentials/${encodeURIComponent(id)}`,
  );
  return mapCredential(data.credential);
}

export async function createCredential(
  data: {
    name: string;
    kind: string;
    label?: string;
    description?: string;
    tags?: string[];
  },
): Promise<Credential> {
  const created = await apiPost<BackendCredentialEnvelope>("/api/credentials", {
    name: data.name,
    kind: data.kind,
    label: data.label,
    description: data.description,
    tags: data.tags,
  });
  return mapCredential(created.credential);
}

export async function updateCredential(
  id: string,
  data: {
    name?: string;
    label?: string;
    description?: string;
    tags?: string[];
    status?: string;
  },
): Promise<Credential> {
  const updated = await apiPatch<BackendCredentialEnvelope>(
    `/api/credentials/${encodeURIComponent(id)}`,
    {
      name: data.name,
      label: data.label,
      description: data.description,
      tags: data.tags,
      status: data.status && CREDENTIAL_STATUSES.has(data.status) ? data.status : undefined,
    },
  );
  return mapCredential(updated.credential);
}

export async function deleteCredential(id: string): Promise<void> {
  await apiDelete<{ message: string }>(`/api/credentials/${encodeURIComponent(id)}`);
}

export async function rotateCredential(id: string, reason?: string): Promise<Credential> {
  const data = await apiPost<BackendCredentialEnvelope>(
    `/api/credentials/${encodeURIComponent(id)}/rotate`,
    { reason: reason || "manual rotation" },
  );
  return mapCredential(data.credential);
}

export async function getCredentialUsage(id: string): Promise<CredentialUsageRecord[]> {
  const data = await apiGet<BackendCredentialUsageDto>(
    `/api/credentials/${encodeURIComponent(id)}/usage`,
  );
  return data.usage ?? [];
}
