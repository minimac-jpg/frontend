import {
  AlertTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  PlayIcon,
  StopCircleIcon,
  XCircleIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { JobStatus } from "../api/types";

interface BuildStatusBadgeProps {
  status: JobStatus;
  className?: string;
}

const statusConfig: Record<
  JobStatus,
  { label: string; bg: string; text: string; dot: string; icon: typeof CheckCircleIcon }
> = {
  success: {
    label: "Success",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    icon: CheckCircleIcon,
  },
  failed: {
    label: "Failed",
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
    dot: "bg-red-500",
    icon: XCircleIcon,
  },
  running: {
    label: "Running",
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500 animate-pulse",
    icon: PlayIcon,
  },
  queued: {
    label: "Queued",
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
    icon: ClockIcon,
  },
  unstable: {
    label: "Unstable",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    icon: AlertTriangleIcon,
  },
  aborted: {
    label: "Aborted",
    bg: "bg-gray-500/10",
    text: "text-gray-500 dark:text-gray-400",
    dot: "bg-gray-400",
    icon: StopCircleIcon,
  },
  cancelled: {
    label: "Cancelled",
    bg: "bg-orange-500/10",
    text: "text-orange-600 dark:text-orange-400",
    dot: "bg-orange-400",
    icon: StopCircleIcon,
  },
  draft: {
    label: "Draft",
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground/50",
    icon: ClockIcon,
  },
  active: {
    label: "Active",
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
    icon: CheckCircleIcon,
  },
  disabled: {
    label: "Disabled",
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
    icon: StopCircleIcon,
  },
  archived: {
    label: "Archived",
    bg: "bg-gray-500/10",
    text: "text-gray-500 dark:text-gray-400",
    dot: "bg-gray-400",
    icon: StopCircleIcon,
  },
};

export function BuildStatusBadge({ status, className }: BuildStatusBadgeProps) {
  const cfg = statusConfig[status];
  const Icon = cfg.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        cfg.bg,
        cfg.text,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", cfg.dot)} />
      <Icon className="size-3" />
      {cfg.label}
    </span>
  );
}

export function BuildStatusDot({ status }: { status: JobStatus }) {
  return <span className={cn("size-2 rounded-full", statusConfig[status].dot)} />;
}

export function formatDuration(ms: number | null): string {
  if (ms === null) return "—";
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (minutes < 60) return `${minutes}m ${secs}s`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}
