import { useMemo, useState } from "react";
import { ChevronRight, RotateCcw, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deployments } from "@/data/dummyData";

interface DeploymentsTabProps {
  releaseName: string;
}

const statusStyle: Record<string, { label: string; color: string }> = {
  successful: { label: "Succeeded", color: "#22c55e" },
  failed: { label: "Failed", color: "#ef4444" },
  in_progress: { label: "In Progress", color: "#3b82f6" },
  pending: { label: "Pending", color: "#a1a1aa" },
};

const batStyle: Record<string, string> = {
  successful: "border-green-200 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  failed: "border-red-200 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  pending: "border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
};

const artifactStatusStyle: Record<string, string> = {
  successful: "border-green-200 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  failed: "border-red-200 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  pending: "border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
  skipped: "border-border bg-secondary text-muted-foreground",
};

export function DeploymentsTab({ releaseName }: DeploymentsTabProps) {
  const data = useMemo(
    () => deployments.filter((d) => d.releaseName === releaseName),
    [releaseName],
  );

  const envs = useMemo(() => {
    const set = new Set(data.map((d) => d.environment));
    return Array.from(set);
  }, [data]);

  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  function toggleEnv(env: string) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(env)) next.delete(env);
      else next.add(env);
      return next;
    });
  }

  function toggleDeployment(id: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      const key = String(id);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function batBadge(bat: string) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
          batStyle[bat] ?? batStyle.pending,
        )}
      >
        {bat === "successful" ? "Passed" : bat === "failed" ? "Failed" : "Pending"}
      </span>
    );
  }

  function artifactStatusBadge(status: string) {
    const labels: Record<string, string> = {
      successful: "Deployed",
      failed: "Failed",
      pending: "Pending",
      skipped: "Skipped",
    };
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
          artifactStatusStyle[status] ?? artifactStatusStyle.pending,
        )}
      >
        {labels[status] ?? status}
      </span>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <h3 className="text-lg font-semibold">Deployments</h3>
        <Button size="sm" className="h-9 text-sm gap-1.5">
          <Plus className="size-4" />
          Create Deployment
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {envs.length > 0 ? (
          envs.map((env) => {
            const envRows = data.filter((d) => d.environment === env);
            const isCollapsed = collapsed.has(env);
            return (
              <div
                key={env}
                className="rounded-lg border border-border bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleEnv(env)}
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-left hover:bg-secondary/40 transition-colors"
                >
                  <ChevronRight
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform",
                      !isCollapsed && "rotate-90",
                    )}
                  />
                  <span className="font-semibold">{env}</span>
                  <Badge
                    variant="outline"
                    className="text-[11px] font-bold"
                  >
                    {envRows.length} deployment
                    {envRows.length === 1 ? "" : "s"}
                  </Badge>
                </button>
                {!isCollapsed && (
                  <div>
                    {/* Table header */}
                    <div className="grid grid-cols-8 gap-3 px-3.5 py-2.5 bg-secondary/50 border-t border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                      <div>Deployment ID</div>
                      <div>Artifacts</div>
                      <div>BAT</div>
                      <div>Created By</div>
                      <div>Created At</div>
                      <div>Ticket</div>
                      <div>Rollback</div>
                      <div />
                    </div>
                    {/* Table rows */}
                    {envRows.map((d) => {
                      const st = statusStyle[d.status] ?? statusStyle.pending;
                      const isExpanded = expanded.has(String(d.id));
                      return (
                        <div key={d.id}>
                          {/* biome-ignore lint/a11y/useSemanticElements: grid layout requires div */}
                          <div
                            role="button"
                            tabIndex={0}
                            className="grid grid-cols-8 gap-3 px-3.5 py-2.5 items-center cursor-pointer hover:bg-secondary/40 transition-colors border-t border-border"
                            onClick={() => toggleDeployment(d.id)}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleDeployment(d.id); }}
                            style={{
                              boxShadow: `inset 3px 0 0 0 ${st?.color ?? "#a1a1aa"}`,
                            }}
                            title={`Status: ${st?.label ?? "Unknown"}`}
                          >
                            <div className="flex items-center gap-2 font-medium truncate">
                              <ChevronRight
                                className={cn(
                                  "size-3.5 shrink-0 text-muted-foreground transition-transform",
                                  isExpanded && "rotate-90",
                                )}
                              />
                              <span
                                className="size-2 rounded-full shrink-0"
                                style={{ backgroundColor: st?.color ?? "#a1a1aa" }}
                              />
                              <span className="truncate">
                                {d.deploymentNumber}
                              </span>
                            </div>
                            <div className="text-muted-foreground">
                              {d.artifacts?.length ?? 0} artifact
                              {(d.artifacts?.length ?? 0) === 1 ? "" : "s"}
                            </div>
                            <div>{batBadge(d.bat)}</div>
                            <div className="text-muted-foreground truncate">
                              {d.createdBy}
                            </div>
                            <div className="text-muted-foreground whitespace-nowrap">
                              {d.createdAt}
                            </div>
                            <div
                              className={
                                d.ticketNumber
                                  ? "text-blue-600 font-medium dark:text-blue-400"
                                  : "text-muted-foreground/50"
                              }
                            >
                              {d.ticketNumber || "\u2013"}
                            </div>
                            <div>
                              {d.rollback ? (
                                <span className="text-foreground">Yes</span>
                              ) : (
                                <span className="text-muted-foreground">
                                  No
                                </span>
                              )}
                            </div>
                              <Button
                                size="sm"
                                className="h-7 text-[11.5px] gap-1 bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  /* redeploy action */
                                }}
                              >
                                <RotateCcw className="size-3" />
                                Redeploy
                              </Button>
                          </div>
                          {/* Expanded artifacts */}
                          {isExpanded && d.artifacts && d.artifacts.length > 0 && (
                            <div className="bg-secondary/30 px-3.5 py-3 pl-8">
                              <div className="grid grid-cols-7 gap-3 px-3.5 pb-1.5 text-[10.5px] font-semibold text-muted-foreground uppercase tracking-wide">
                                <div>App Key</div>
                                <div>Name</div>
                                <div>Version</div>
                                <div>Build #</div>
                                <div>Hash</div>
                                <div>Build Date</div>
                                <div>Status</div>
                              </div>
                              <div className="rounded-md border border-border bg-card divide-y divide-border">
                                {d.artifacts.map((a) => (
                                  <div
                                    key={a.id}
                                    className="grid grid-cols-7 gap-3 px-3.5 py-2 text-[12.5px] items-center"
                                  >
                                    <div>
                                      <span className="inline-flex items-center rounded-md border border-border bg-secondary px-1.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-muted-foreground">
                                        {a.appKey}
                                      </span>
                                    </div>
                                    <div className="font-medium truncate">
                                      {a.name}
                                    </div>
                                    <div className="text-muted-foreground">
                                      {a.version}
                                    </div>
                                    <div className="text-muted-foreground">
                                      {a.buildNumber}
                                    </div>
                                    <div className="font-mono text-muted-foreground truncate">
                                      {a.hash}
                                    </div>
                                    <div className="text-muted-foreground whitespace-nowrap">
                                      {a.buildTime}
                                    </div>
                                    <div>
                                      {artifactStatusBadge(a.status)}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-end pt-2 pr-1">
                                <span className="text-[11px] text-muted-foreground/60">
                                  Created by {d.createdBy} at {d.createdAt}
                                </span>
                              </div>
                            </div>
                          )}
                          {isExpanded && (!d.artifacts || d.artifacts.length === 0) && (
                            <div className="bg-secondary/30 px-8 py-4 text-sm text-muted-foreground">
                              No artifacts for this deployment.
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="rounded-lg border border-border bg-card p-12 text-center text-muted-foreground">
            <h4 className="text-sm font-semibold text-foreground mb-1">
              Deployments
            </h4>
            <p className="text-[13px]">
              Deployment history for this release will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
