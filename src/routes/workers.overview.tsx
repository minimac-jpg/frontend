import { createFileRoute } from "@tanstack/react-router";

import { ConsoleOverview } from "@/features/console/components/ConsoleOverview";

function WorkersOverviewRoute() {
  return <ConsoleOverview />;
}

export const Route = createFileRoute("/workers/overview")({

  component: WorkersOverviewRoute,
});
