import { createFileRoute } from "@tanstack/react-router";

import { CacheList } from "../components/cache/cache-list";
import { PageShell } from "../components/layout/page-shell";

function CacheRoute() {
  return (
    <PageShell title="Cache" subtitle="View cache entries and activity">
      <CacheList />
    </PageShell>
  );
}

export const Route = createFileRoute("/cache")({

  component: CacheRoute,
});
