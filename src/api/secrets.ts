import { apiDelete, apiGet, apiPatch, apiPost } from "@/lib/api/client";
import type { Secret, SecretListResponse, SecretUsageRecord } from "@/types/secret";

interface BackendScopeDto {
  type: string;
  organization_id?: string;
  project_id?: string;
  repository_id?: string;
  environment?: string;
  pipeline_id?: string;
}

interface BackendOwnerDto {
  type: string;
  user_id?: string;
  display_name?: string;
  project_id?: string;
  project_name?: string;
  organization_id?: string;
  component?: string;
}

interface BackendSecretMetadataDto {
  label?: string;
  description?: string | null;
  tags?: string[];
}

interface BackendSecretSummaryDto {
  id: string;
  name: string;
  kind: string;
  status: string;
  provider: string;
  current_version: number;
  created_at: string;
  updated_at: string;
}

interface BackendSecretRecordDto extends BackendSecretSummaryDto {
  scope?: BackendScopeDto;
  owner?: BackendOwnerDto;
  metadata?: BackendSecretMetadataDto;
  external_reference?: string;
  is_rotating?: boolean;
}

interface BackendSecretEnvelope {
  secret: BackendSecretRecordDto;
}

interface BackendSecretListDto {
  secrets: BackendSecretRecordDto[];
  total: number;
}

interface BackendSecretUsageDto {
  usage: SecretUsageRecord[];
}

const SECRET_KINDS = new Set([
  "password",
  "token",
  "ssh_key",
  "oidc",
  "cloud_credentials",
  "database_connection_string",
  "docker_registry",
  "kubernetes_service_account",
  "certificate",
  "generic",
]);

const SECRET_STATUSES = new Set(["active", "disabled", "rotating", "expired", "revoked"]);

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

function scopeProjectId(scope: BackendScopeDto | undefined): string | undefined {
  if (scope && (scope.type === "project" || scope.type === "repository" || scope.type === "environment" || scope.type === "pipeline")) {
    return scope.project_id;
  }
  return undefined;
}

function ownerLabel(owner: BackendOwnerDto | undefined): string {
  if (!owner) return "";
  switch (owner.type) {
    case "user":
      return owner.display_name || owner.user_id || "user";
    case "project":
      return owner.project_name || owner.project_id || "project";
    case "organization":
      return owner.organization_id || "organization";
    case "system":
      return owner.component || "system";
    default:
      return owner.type;
  }
}

function mapSecret(dto: BackendSecretRecordDto): Secret {
  return {
    id: dto.id,
    name: dto.name,
    kind: dto.kind,
    status: dto.status,
    scope: scopeLabel(dto.scope),
    owner: ownerLabel(dto.owner),
    provider: dto.provider ?? "",
    external_reference: dto.external_reference ?? "",
    current_version: dto.current_version,
    is_rotating: dto.is_rotating ?? false,
    created_at: dto.created_at,
    updated_at: dto.updated_at,
    project: scopeProjectId(dto.scope),
  };
}

function buildScope(data: { project?: string }): BackendScopeDto | undefined {
  if (data.project) {
    return { type: "project", project_id: data.project };
  }
  return undefined;
}

export async function listSecrets(_limit = 20): Promise<SecretListResponse> {
  const data = await apiGet<BackendSecretListDto>("/api/secrets");
  const secrets = (data.secrets ?? []).map(mapSecret);
  return { items: secrets, total: data.total ?? secrets.length };
}

export async function getSecret(id: string): Promise<Secret> {
  const data = await apiGet<BackendSecretEnvelope>(`/api/secrets/${encodeURIComponent(id)}`);
  return mapSecret(data.secret);
}

export async function createSecret(
  data: {
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
  },
): Promise<Secret> {
  const created = await apiPost<BackendSecretEnvelope>("/api/secrets", {
    name: data.name,
    kind: SECRET_KINDS.has(data.kind) ? data.kind : "generic",
    scope: buildScope(data),
    owner: undefined,
    provider: data.provider,
    external_reference: data.external_reference,
    label: data.label,
    description: data.description,
    tags: data.tags,
  });
  if (data.value) {
    await apiPost<{ secret_id: string; stored: boolean }>(
      `/api/secrets/${encodeURIComponent(created.secret.id)}/value`,
      { value: data.value },
    );
  }
  return mapSecret(created.secret);
}

export async function updateSecret(
  id: string,
  data: {
    name?: string;
    label?: string;
    description?: string;
    tags?: string[];
    status?: string;
    value?: string;
    folder?: string;
    project?: string;
  },
): Promise<Secret> {
  if (data.value) {
    await apiPost<{ secret_id: string; stored: boolean }>(
      `/api/secrets/${encodeURIComponent(id)}/value`,
      { value: data.value },
    );
  }
  const hasMetadata =
    data.name !== undefined ||
    data.label !== undefined ||
    data.description !== undefined ||
    data.tags !== undefined ||
    data.status !== undefined;
  if (!hasMetadata) {
    return getSecret(id);
  }
  const updated = await apiPatch<BackendSecretEnvelope>(`/api/secrets/${encodeURIComponent(id)}`, {
    name: data.name,
    label: data.label,
    description: data.description,
    tags: data.tags,
    status: data.status && SECRET_STATUSES.has(data.status) ? data.status : undefined,
  });
  return mapSecret(updated.secret);
}

export async function deleteSecret(id: string): Promise<void> {
  await apiDelete<{ message: string }>(`/api/secrets/${encodeURIComponent(id)}`);
}

export async function rotateSecret(id: string, reason?: string): Promise<Secret> {
  const data = await apiPost<BackendSecretEnvelope>(
    `/api/secrets/${encodeURIComponent(id)}/rotate`,
    { reason: reason || "manual rotation" },
  );
  return mapSecret(data.secret);
}

export async function getSecretUsage(id: string): Promise<SecretUsageRecord[]> {
  const data = await apiGet<BackendSecretUsageDto>(`/api/secrets/${encodeURIComponent(id)}/usage`);
  return data.usage ?? [];
}
