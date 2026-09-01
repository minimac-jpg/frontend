import { ProjectSummaryCard } from "./project-summary-card";
import { RecentBuildsCard } from "./recent-builds-card";
import { WorkerSummaryCard } from "./worker-summary-card";

export function DashboardSummary() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProjectSummaryCard />
        <WorkerSummaryCard />
      </div>
      <RecentBuildsCard />
    </div>
  );
}
