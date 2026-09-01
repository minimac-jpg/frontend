import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { LoadingState } from "@/components/common/loading-state";
import { useCredentials } from "@/hooks/use-credentials";
import { CredentialCard } from "./credential-card";

interface CredentialListProps {
  onCreateClick: () => void;
}

export function CredentialList({ onCreateClick }: CredentialListProps) {
  const { data, isLoading, error } = useCredentials();

  if (isLoading) {
    return <LoadingState message="Loading credentials..." />;
  }

  if (error) {
    return <ErrorState message="Failed to load credentials" />;
  }

  if (!data || data.items.length === 0) {
    return (
      <EmptyState
        title="No credentials"
        description="Create your first credential reference to get started."
        action={
          <button className="button button-primary" onClick={onCreateClick}>
            Create Credential
          </button>
        }
      />
    );
  }

  return (
    <div className="credential-list">
      {data.items.map((credential) => (
        <CredentialCard key={credential.id} credential={credential} />
      ))}
    </div>
  );
}
