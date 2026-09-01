import { useStats, useEvents, usePods } from "../api/queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ResourceStatusBadge } from "./ResourceStatusBadge";
import { ActivityIcon, AlertCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConsoleOverview() {
  const { data: stats, isLoading: statsLoading } = useStats();
  const { data: pods, isLoading: podsLoading } = usePods();
  const { data: events } = useEvents();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Cluster Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monitor cluster health and resource usage
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? <Skeleton className="h-8 w-12" /> : <p className="text-3xl font-bold">{stats?.totalProjects}</p>}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Running Pods</CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? <Skeleton className="h-8 w-12" /> : <p className="text-3xl font-bold text-emerald-500">{stats?.runningPods}<span className="text-sm text-muted-foreground">/{stats?.totalPods}</span></p>}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Builds</CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? <Skeleton className="h-8 w-12" /> : <p className="text-3xl font-bold text-blue-500">{stats?.activeBuilds}</p>}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Failed Deployments</CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? <Skeleton className="h-8 w-12" /> : <p className={cn("text-3xl font-bold", (stats?.failedDeployments ?? 0) > 0 ? "text-red-500" : "text-emerald-500")}>{stats?.failedDeployments}</p>}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {statsLoading ? (
              <>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </>
            ) : (
              <>
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">CPU</span>
                    <span className="font-mono">{stats?.cpuUsage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className={cn("h-full rounded-full transition-all", (stats?.cpuUsage ?? 0) > 80 ? "bg-red-500" : "bg-blue-500")} style={{ width: `${stats?.cpuUsage ?? 0}%` }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">Memory</span>
                    <span className="font-mono">{stats?.memoryUsage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className={cn("h-full rounded-full transition-all", (stats?.memoryUsage ?? 0) > 80 ? "bg-red-500" : "bg-blue-500")} style={{ width: `${stats?.memoryUsage ?? 0}%` }} />
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recent Events</CardTitle>
          </CardHeader>
          <CardContent className="max-h-64 space-y-2 overflow-y-auto">
            {!events ? (
              <Skeleton className="h-10 w-full" />
            ) : events.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">No recent events</p>
            ) : (
              events.map((e) => (
                <div key={e.metadata.uid} className="flex items-start gap-2 rounded-md border p-2 text-xs">
                  {e.type === "Warning" ? <AlertCircleIcon className="mt-0.5 size-3.5 shrink-0 text-red-500" /> : <ActivityIcon className="mt-0.5 size-3.5 shrink-0 text-blue-500" />}
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{e.reason}</p>
                    <p className="text-muted-foreground">{e.message}</p>
                    <p className="mt-0.5 text-muted-foreground/60">
                      {e.involvedObject.kind} <span className="font-mono">{e.involvedObject.name}</span>
                      {" / "}{e.metadata.namespace}
                    </p>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Pods by Status</CardTitle>
        </CardHeader>
        <CardContent>
          {podsLoading ? (
            <Skeleton className="h-10 w-full" />
          ) : !pods || pods.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">No pods found</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {Object.entries(
                pods.reduce<Record<string, number>>((acc, p) => {
                  acc[p.status.phase] = (acc[p.status.phase] ?? 0) + 1;
                  return acc;
                }, {}),
              ).map(([status, count]) => (
                <div key={status} className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm">
                  <ResourceStatusBadge status={status} />
                  <span className="font-mono text-xs text-muted-foreground">{count}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
