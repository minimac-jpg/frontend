import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBuilds, useJob, useStopBuild, useTriggerBuild } from "@/features/pipelines/api/queries";
import { BuildHistoryList } from "@/features/pipelines/components/BuildHistoryList";
import { JobDetailHeader } from "@/features/pipelines/components/JobDetailHeader";
import { PipelineStageView } from "@/features/pipelines/components/PipelineStageView";

function JobDetailRoute() {
  const { jobId } = useParams({ from: "/builds/$jobId" });
  const { data: job, isLoading: jobLoading, error: jobError } = useJob(jobId);
  const { data: builds, isLoading: buildsLoading, error: buildsError } = useBuilds(jobId);
  const { mutateAsync: triggerBuild, isPending: isTriggering } = useTriggerBuild();
  const { mutateAsync: stopBuild, isPending: isStopping } = useStopBuild();

  const handleTrigger = () => {
    if (job) triggerBuild(job);
  };
  const handleStop = () => {
    if (!builds) return;
    const active = builds.find((b) => b.status === "running" || b.status === "queued");
    if (active) stopBuild({ jobId, buildId: active.id });
  };

  if (jobLoading) {
    return (
      <div className="flex flex-col gap-6">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (jobError || !job) {
    return (
      <div
        className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
        role="alert"
      >
        <p className="font-medium">{jobError?.message ?? "Job not found"}</p>
      </div>
    );
  }

  const latestStages =
    builds && builds.length > 0
      ? (builds.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0]
          ?.stages ?? [])
      : [];

  return (
    <div className="flex flex-col gap-6 p-6">
      <Link
        to="/builds"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeftIcon className="size-4" />
        All pipelines
      </Link>
      <JobDetailHeader
        job={job}
        onTrigger={handleTrigger}
        onStop={handleStop}
        isTriggering={isTriggering}
        isStopping={isStopping}
      />
      <Tabs defaultValue="history">
        <TabsList>
          <TabsTrigger value="history">Build History</TabsTrigger>
          <TabsTrigger value="stages">Stages</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <BuildHistoryList
            builds={builds}
            isLoading={buildsLoading}
            error={buildsError}
            jobId={jobId}
          />
        </TabsContent>
        <TabsContent value="stages">
          <div className="rounded-xl border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium text-foreground">Latest build stages</h3>
            {buildsLoading ? (
              <Skeleton className="h-16 w-full" />
            ) : (
              <PipelineStageView stages={latestStages} />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const Route = createFileRoute("/builds/$jobId/")({
  component: JobDetailRoute,
});
