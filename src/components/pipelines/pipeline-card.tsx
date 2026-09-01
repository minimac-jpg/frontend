import { Link } from "@tanstack/react-router";
import type { Pipeline } from "../../types/pipeline";
import { Badge } from "../common/badge";

interface PipelineCardProps {
  pipeline: Pipeline;
}

function statusVariant(status: string): "success" | "warning" | "error" | "default" {
  switch (status) {
    case "active":
    case "ready":
      return "success";
    case "compiling":
    case "validating":
      return "warning";
    case "failed":
    case "error":
      return "error";
    default:
      return "default";
  }
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function PipelineCard({ pipeline }: PipelineCardProps) {
  return (
    <Link
      to="/pipelines/$pipelineId"
      params={{ pipelineId: pipeline.id }}
      className="pipeline-card"
    >
      <div className="pipeline-card-header">
        <h3 className="pipeline-card-name">{pipeline.name}</h3>
        <Badge variant={statusVariant(pipeline.status)}>{pipeline.status}</Badge>
      </div>
      <div className="pipeline-card-meta">
        <span className="pipeline-card-project">Project: {pipeline.projectId.slice(0, 8)}</span>
        <span className="pipeline-card-date">Updated {formatDate(pipeline.updatedAt)}</span>
      </div>
    </Link>
  );
}
