import { useState } from "react";
import { useCreateCredential } from "@/hooks/use-credentials";

interface CredentialCreateFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export function CredentialCreateForm({ onSuccess, onCancel }: CredentialCreateFormProps) {
  const [name, setName] = useState("");
  const [kind, setKind] = useState("token");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const createMutation = useCreateCredential();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const tagsList = tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    createMutation.mutate(
      {
        name: name.trim(),
        kind,
        label: label.trim() || undefined,
        description: description.trim() || undefined,
        tags: tagsList.length > 0 ? tagsList : undefined,
      },
      {
        onSuccess: () => {
          onSuccess();
        },
      },
    );
  };

  return (
    <form className="form credential-create-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cred-name">Name *</label>
        <input
          id="cred-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., github-ci-token"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cred-kind">Kind *</label>
        <select id="cred-kind" value={kind} onChange={(e) => setKind(e.target.value)}>
          <option value="token">Token</option>
          <option value="ssh_key">SSH Key</option>
          <option value="oidc">OIDC</option>
          <option value="cloud_role">Cloud Role</option>
          <option value="docker_registry">Docker Registry</option>
          <option value="kubernetes_service_account">K8s Service Account</option>
          <option value="username_password">Username/Password</option>
          <option value="generic">Generic</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cred-label">Label</label>
        <input
          id="cred-label"
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Display label"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cred-description">Description</label>
        <textarea
          id="cred-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What this credential is for"
          rows={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cred-tags">Tags (comma-separated)</label>
        <input
          id="cred-tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="production, ci, deploy"
        />
      </div>

      <div className="form-actions">
        <button type="button" className="button" onClick={onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className="button button-primary"
          disabled={createMutation.isPending || !name.trim()}
        >
          {createMutation.isPending ? "Creating..." : "Create Credential"}
        </button>
      </div>

      {createMutation.isError && (
        <div className="error-state" role="alert">
          <p className="error-state-message">
            Failed to create credential: {createMutation.error.message}
          </p>
        </div>
      )}
    </form>
  );
}
