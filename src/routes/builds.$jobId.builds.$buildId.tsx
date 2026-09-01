import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeftIcon,
  CalendarIcon,
  DownloadIcon,
  GitCommitIcon,
  LoaderIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { errorToMessage, toast, Toaster } from "@/components/ui/toast";
import { downloadArtifact } from "@/features/artifacts/api/queries";
import { useBuild, useBuildArtifacts, useConsoleLog } from "@/features/pipelines/api/queries";
import type { Artifact } from "@/features/pipelines/api/types";
import { BuildStatusBadge, formatDuration } from "@/features/pipelines/components/BuildStatusBadge";
import { ConsoleLogViewer } from "@/features/pipelines/components/ConsoleLogViewer";
import { PipelineStageView } from "@/features/pipelines/components/PipelineStageView";

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** i;
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i] ?? ""}`;
}

function ArtifactDownloadButton({ artifact }: { artifact: Artifact }) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    setIsDownloading(true);
    try {
      await downloadArtifact(artifact.artifactId, artifact.name);
    } catch (err) {
      toast.error(`Download failed: ${errorToMessage(err)}`);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <Button variant="outline" size="xs" onClick={handleDownload} disabled={isDownloading}>
      {isDownloading ? (
        <LoaderIcon className="mr-1 size-3 animate-spin" />
      ) : (
        <DownloadIcon className="mr-1 size-3" />
      )}
      Download
    </Button>
  );
}

function BuildDetailRoute() {
  const { jobId, buildId } = useParams({ from: "/builds/$jobId/builds/$buildId" });
  const { data: build, isLoading, error } = useBuild(jobId, buildId);
  const { data: buildArtifacts } = useBuildArtifacts(buildId);
  const { data: logData, isLoading: logLoading, error: logError } = useConsoleLog(buildId);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (error || !build) {
    return (
      <div
        className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
        role="alert"
      >
        <p className="font-medium">{error?.message ?? "Build not found"}</p>
      </div>
    );
  }

  const artifacts = buildArtifacts ?? build.artifacts;

  return (
    <div className="flex flex-col gap-6 p-6">
      <Link
        to="/builds/$jobId"
        params={{ jobId }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeftIcon className="size-4" />
        Back to pipeline
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">#{build.number}</h1>
            <BuildStatusBadge status={build.status} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{build.commitMessage}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <GitCommitIcon className="size-3.5" />
          <span className="font-mono">{build.commitHash.slice(0, 7)}</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <UserIcon className="size-3.5" />
          {build.triggeredBy}
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarIcon className="size-3.5" />
          {formatDateTime(build.createdAt)}
        </span>
        {build.duration !== null && (
          <span className="font-mono">{formatDuration(build.duration)}</span>
        )}
      </div>

      <Tabs defaultValue="console">
        <TabsList>
          <TabsTrigger value="console">Console Output</TabsTrigger>
          <TabsTrigger value="stages">Stages</TabsTrigger>
          {artifacts.length > 0 && (
            <TabsTrigger value="artifacts">Artifacts ({artifacts.length})</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="console">
          <ConsoleLogViewer data={logData} isLoading={logLoading} error={logError} />
        </TabsContent>
        <TabsContent value="stages">
          <PipelineStageView stages={build.stages} />
        </TabsContent>
        {artifacts.length > 0 && (
          <TabsContent value="artifacts">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {artifacts.map((artifact) => (
                <Card key={artifact.name}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium truncate">{artifact.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        {formatBytes(artifact.size)}
                      </span>
                      <ArtifactDownloadButton artifact={artifact} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
      <Toaster />
    </div>
  );
}

export const Route = createFileRoute("/builds/$jobId/builds/$buildId")({
  component: BuildDetailRoute,
});
