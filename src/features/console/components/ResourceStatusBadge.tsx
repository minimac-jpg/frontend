import { cn } from "@/lib/utils";

const statusColorMap: Record<string, string> = {
  Running: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Succeeded: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Complete: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  New: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Failed: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  Error: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  CrashLoopBackOff: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  Unknown: "bg-gray-500/10 text-gray-500 dark:text-gray-400 border-gray-500/20",
  Terminating: "bg-gray-500/10 text-gray-500 dark:text-gray-400 border-gray-500/20",
  Cancelled: "bg-gray-500/10 text-gray-500 dark:text-gray-400 border-gray-500/20",
  Bound: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

const statusDotMap: Record<string, string> = {
  Running: "bg-emerald-500",
  Succeeded: "bg-emerald-500",
  Complete: "bg-emerald-500",
  Active: "bg-emerald-500",
  New: "bg-amber-500",
  Failed: "bg-red-500",
  Error: "bg-red-500",
  CrashLoopBackOff: "bg-red-500",
  Unknown: "bg-gray-400",
  Terminating: "bg-gray-400",
  Cancelled: "bg-gray-400",
  Bound: "bg-emerald-500",
};

interface ResourceStatusBadgeProps {
  status: string;
  className?: string;
}

export function ResourceStatusBadge({ status, className }: ResourceStatusBadgeProps) {
  const color = statusColorMap[status] ?? "bg-gray-500/10 text-gray-500 border-gray-500/20";
  const dot = statusDotMap[status] ?? "bg-gray-400";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        color,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", dot)} />
      {status}
    </span>
  );
}

export function StatusDot({ status }: { status: string }) {
  const dot = statusDotMap[status] ?? "bg-gray-400";
  return <span className={cn("size-2 rounded-full", dot)} />;
}
