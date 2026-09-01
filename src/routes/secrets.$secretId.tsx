import { createFileRoute,
  useNavigate, useParams,
} from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/common/button";
import { ErrorState } from "../components/common/error-state";
import { LoadingState } from "../components/common/loading-state";
import { PageShell } from "../components/layout/page-shell";
import { SecretEditForm } from "../components/secrets/secret-edit-form";
import { useDeleteSecret, useRotateSecret, useSecret, useSecretUsage } from "../hooks/use-secrets";

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
  const labels: Record<string, string> = {
    token: "Token",
    password: "Password",
    ssh_key: "SSH Key",
    oidc: "OIDC",
    cloud_credentials: "Cloud Credentials",
    database_connection_string: "Database Connection",
    docker_registry: "Docker Registry",
    kubernetes_service_account: "K8s Service Account",
    certificate: "Certificate",
    generic: "Generic",
  };
  return labels[kind] ?? kind;
}

function SecretDetailRoute() {
  const { secretId } = useParams({ from: "/secrets/$secretId" });
  const navigate = useNavigate();
  const { data: secret, isLoading, error } = useSecret(secretId);
  const { data: usage } = useSecretUsage(secretId);
  const { mutateAsync: deleteSecret, isPending: isDeleting } = useDeleteSecret();
  const { mutateAsync: rotateSecret, isPending: isRotating } = useRotateSecret();

  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [rotateReason, setRotateReason] = useState("");

  if (isLoading) {
    return (
      <PageShell title="Secret">
        <LoadingState message="Loading secret..." />
      </PageShell>
    );
  }

  if (error) {
    return (
      <PageShell title="Secret">
        <ErrorState message={error.message} />
      </PageShell>
    );
  }

  if (!secret) {
    return (
      <PageShell title="Secret">
        <ErrorState message="Secret not found" />
      </PageShell>
    );
  }

  const handleDelete = async () => {
    try {
      console.log("[SecretDetail] Deleting secret:", secret.id);
      await deleteSecret(secret.id);
      console.log("[SecretDetail] Delete succeeded");
      navigate({ to: "/secrets" });
    } catch (err) {
      console.error("[SecretDetail] Delete failed:", err);
      // error handled by mutation
    }
  };

  const handleRotate = async () => {
    try {
      console.log("[SecretDetail] Rotating secret:", secret.id);
      await rotateSecret({ id: secret.id, reason: rotateReason || undefined });
      console.log("[SecretDetail] Rotate succeeded");
      setRotateReason("");
    } catch (err) {
      console.error("[SecretDetail] Rotate failed:", err);
      // error handled by mutation
    }
  };

  return (
    <PageShell title={secret.name} subtitle={`Kind: ${kindLabel(secret.kind)}`}>
      {/* Status badges */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <span className={`badge ${statusColor(secret.status)}`}>{secret.status}</span>
        <span className="badge badge-outline">{kindLabel(secret.kind)}</span>
        {secret.is_rotating && <span className="badge badge-info">rotating</span>}
      </div>

      {/* Metadata */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h3 className="card-title">Details</h3>
        <div
          className="card-meta"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}
        >
          <div>
            <strong>Provider:</strong> {secret.provider}
          </div>
          <div>
            <strong>Version:</strong> {secret.current_version}
          </div>
          <div>
            <strong>Scope:</strong> {secret.scope}
          </div>
          <div>
            <strong>Owner:</strong> {secret.owner}
          </div>
          <div>
            <strong>Created:</strong> {new Date(secret.created_at).toLocaleString()}
          </div>
          <div>
            <strong>Updated:</strong> {new Date(secret.updated_at).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <Button variant="secondary" size="sm" onClick={() => setShowEditForm(!showEditForm)}>
          {showEditForm ? "Cancel Edit" : "Edit"}
        </Button>
        <Button variant="secondary" size="sm" onClick={handleRotate} disabled={isRotating}>
          {isRotating ? "Rotating..." : "Rotate"}
        </Button>
        <Button variant="danger" size="sm" onClick={() => setShowDeleteConfirm(true)}>
          Delete
        </Button>
      </div>

      {/* Rotate reason input */}
      {isRotating && (
        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <label className="project-form-label" htmlFor="rotate-reason">
            Rotation Reason
          </label>
          <input
            id="rotate-reason"
            className="project-form-input"
            type="text"
            placeholder="Optional reason for rotation"
            value={rotateReason}
            onChange={(e) => setRotateReason(e.target.value)}
          />
        </div>
      )}

      {/* Delete confirmation */}
      {showDeleteConfirm && (
        <div className="card" style={{ marginBottom: "1.5rem", border: "1px solid #dc2626" }}>
          <h3 className="project-form-title" style={{ color: "#dc2626" }}>
            Confirm Delete
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.75rem" }}>
            Permanently delete secret &quot;{secret.name}&quot;. This action cannot be undone.
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button variant="danger" size="sm" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Yes, delete"}
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Edit form */}
      {showEditForm && (
        <div style={{ marginBottom: "1.5rem" }}>
          <SecretEditForm secret={secret} onSuccess={() => setShowEditForm(false)} />
        </div>
      )}

      {/* Usage history */}
      {usage && usage.length > 0 && (
        <div className="card">
          <h3 className="card-title">Usage History</h3>
          <table style={{ width: "100%", fontSize: "0.875rem" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>Used By</th>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>Purpose</th>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>When</th>
              </tr>
            </thead>
            <tbody>
              {usage.map((record, idx) => (
                <tr key={idx} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.5rem" }}>{record.used_by}</td>
                  <td style={{ padding: "0.5rem" }}>{record.used_for}</td>
                  <td style={{ padding: "0.5rem" }}>{new Date(record.used_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </PageShell>
  );
}

export const Route = createFileRoute("/secrets/$secretId")({

  component: SecretDetailRoute,
});
