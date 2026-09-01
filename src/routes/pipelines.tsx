import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "../components/layout/page-shell";
import { PipelineList } from "../components/pipelines/pipeline-list";

function PipelinesRoute() {
  return (
    <PageShell title="Pipelines" subtitle="Manage your CI/CD pipelines">
      <PipelineList />
    </PageShell>
  );
}

export const Route = createFileRoute("/pipelines")({

  component: PipelinesRoute,
});
