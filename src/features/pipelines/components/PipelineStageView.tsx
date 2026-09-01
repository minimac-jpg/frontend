import { cn } from "@/lib/utils";
import type { JobStatus, Stage } from "../api/types";
import { BuildStatusDot } from "./BuildStatusBadge";

interface PipelineStageViewProps {
  stages: Stage[];
}

const stageColorMap: Record<JobStatus, string> = {
  success: "bg-emerald-500",
  failed: "bg-red-500",
  running: "bg-blue-500",
  queued: "bg-muted-foreground/30",
  unstable: "bg-amber-500",
  aborted: "bg-gray-400",
  cancelled: "bg-orange-400",
  draft: "bg-muted-foreground/30",
  active: "bg-blue-500",
  disabled: "bg-muted-foreground/30",
  archived: "bg-gray-400",
};

function formatStageDuration(ms: number | null): string {
  if (ms === null) return "—";
  if (ms < 1000) return `${ms}ms`;
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

export function PipelineStageView({ stages }: PipelineStageViewProps) {
  if (stages.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">
        No stages for this build.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex items-start gap-0 min-w-max px-1 py-4">
        {stages.map((stage, i) => (
          <div key={stage.name} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center">
                <div
                  className={cn(
                    "flex h-8 w-32 items-center justify-center rounded-md text-xs font-medium text-white",
                    stageColorMap[stage.status],
                  )}
                >
                  <span className="truncate px-2">{stage.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <BuildStatusDot status={stage.status} />
                <span className="font-mono text-[11px] text-muted-foreground">
                  {formatStageDuration(stage.duration)}
                </span>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className={cn("mx-0.5 mt-4 h-0.5 w-6", stageColorMap[stage.status])} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
