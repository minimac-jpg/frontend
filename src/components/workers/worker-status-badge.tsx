import { Badge } from "../common/badge";

interface WorkerStatusBadgeProps {
  status: string;
}

type BadgeVariant = "success" | "warning" | "error" | "info" | "default";

function statusVariant(status: string): BadgeVariant {
  switch (status) {
    case "ready":
    case "online":
      return "success";
    case "busy":
    case "draining":
    case "starting":
      return "warning";
    case "offline":
    case "failed":
      return "error";
    default:
      return "default";
  }
}

export function WorkerStatusBadge({ status }: WorkerStatusBadgeProps) {
  return <Badge variant={statusVariant(status)}>{status}</Badge>;
}
