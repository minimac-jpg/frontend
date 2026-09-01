import type { Credential } from "@/types/credentials";

interface CredentialCardProps {
  credential: Credential;
}

function statusColor(status: string): string {
  switch (status) {
    case "active":
      return "badge-success";
    case "disabled":
      return "badge-warning";
    case "expired":
      return "badge-danger";
    case "revoked":
      return "badge-neutral";
    case "rotating":
      return "badge-info";
    default:
      return "badge-neutral";
  }
}

function kindLabel(kind: string): string {
  switch (kind) {
    case "token":
      return "Token";
    case "ssh_key":
      return "SSH Key";
    case "oidc":
      return "OIDC";
    case "cloud_role":
      return "Cloud Role";
    case "docker_registry":
      return "Docker Registry";
    case "kubernetes_service_account":
      return "K8s Service Account";
    case "username_password":
      return "Username/Password";
    case "generic":
      return "Generic";
    default:
      return kind;
  }
}

export function CredentialCard({ credential }: CredentialCardProps) {
  return (
    <div className="card credential-card">
      <div className="card-header">
        <span className={`badge ${statusColor(credential.status)}`}>{credential.status}</span>
        <span className="badge badge-outline">{kindLabel(credential.kind)}</span>
      </div>
      <h3 className="card-title">{credential.name}</h3>
      <p className="card-subtitle">{credential.label}</p>
      <div className="card-meta">
        <span>Scope: {credential.scope}</span>
        <span>Updated: {new Date(credential.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
