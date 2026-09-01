import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "../components/layout/page-shell";

function ReleasesArtifactsRoute() {
  return (
    <PageShell title="Artifacts" subtitle="Artifacts page — content coming soon.">
      <p className="text-sm text-muted-foreground">Artifacts page — content coming soon.</p>
    </PageShell>
  );
}

export const Route = createFileRoute("/releases/artifacts")({

  component: ReleasesArtifactsRoute,
});
