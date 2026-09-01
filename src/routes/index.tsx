import { createFileRoute } from "@tanstack/react-router";

import { DashboardSummary } from "../components/dashboard/dashboard-summary";

function DashboardRoute() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Overview of your CI/CD platform</p>
      </div>
      <DashboardSummary />
    </div>
  );
}

export const Route = createFileRoute("/")({

  component: DashboardRoute,
});
