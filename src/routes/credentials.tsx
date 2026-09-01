import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import { CredentialCreateForm } from "@/components/credentials/credential-create-form";
import { CredentialList } from "@/components/credentials/credential-list";
import { PageShell } from "@/components/layout/page-shell";


function CredentialsRoute() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <PageShell
      title="Credentials"
      subtitle="Manage credential references for your project"
      actions={
        !showCreateForm ? (
          <button className="button button-primary" onClick={() => setShowCreateForm(true)}>
            Create Credential
          </button>
        ) : undefined
      }
    >
      {showCreateForm ? (
        <CredentialCreateForm
          onSuccess={() => setShowCreateForm(false)}
          onCancel={() => setShowCreateForm(false)}
        />
      ) : (
        <CredentialList onCreateClick={() => setShowCreateForm(true)} />
      )}
    </PageShell>
  );
}

export const Route = createFileRoute("/credentials")({

  component: CredentialsRoute,
});
