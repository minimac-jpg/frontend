import { PlayIcon, RotateCcwIcon, SquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Job } from "../api/types";
import { BuildStatusBadge } from "./BuildStatusBadge";

interface JobDetailHeaderProps {
  job: Job;
  onTrigger: () => void;
  onStop: () => void;
  isTriggering: boolean;
  isStopping: boolean;
}

export function JobDetailHeader({
  job,
  onTrigger,
  onStop,
  isTriggering,
  isStopping,
}: JobDetailHeaderProps) {
  const isRunning = job.status === "running" || job.status === "queued";

  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">{job.name}</h1>
          <BuildStatusBadge status={job.status} />
        </div>
        {job.description && <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>}
      </div>
      <div className="flex items-center gap-2">
        {isRunning ? (
          <Button variant="destructive" size="sm" onClick={onStop} disabled={isStopping}>
            <SquareIcon className="mr-1.5 size-3.5" />
            {isStopping ? "Stopping..." : "Stop"}
          </Button>
        ) : (
          <Button variant="default" size="sm" onClick={onTrigger} disabled={isTriggering}>
            <PlayIcon className="mr-1.5 size-3.5" />
            {isTriggering ? "Triggering..." : "Run"}
          </Button>
        )}
        {!isRunning && (
          <Button variant="outline" size="sm" onClick={onTrigger} disabled={isTriggering}>
            <RotateCcwIcon className="mr-1.5 size-3.5" />
            Rebuild
          </Button>
        )}
      </div>
    </div>
  );
}
