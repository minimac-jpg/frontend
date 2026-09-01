export type JobStatus =
  | "success"
  | "failed"
  | "running"
  | "queued"
  | "unstable"
  | "aborted"
  | "cancelled"
  | "draft"
  | "active"
  | "disabled"
  | "archived";

export type BuildTrigger = "manual" | "scheduled" | "webhook";

export interface Job {
  id: string;
  name: string;
  description: string | null;
  status: JobStatus;
  lastRunAt: string | null;
  lastDuration: number | null;
  branch: string;
  trigger: BuildTrigger;
  createdAt: string;
  updatedAt: string;
  tenant_id: string;
  project_id: string;
  tags: string[];
}

export interface Stage {
  name: string;
  status: JobStatus;
  duration: number | null;
  startedAt: string | null;
  completedAt: string | null;
}

export interface Build {
  id: string;
  jobId: string;
  number: number;
  status: JobStatus;
  state: string;
  trigger: BuildTrigger;
  branch: string;
  commitHash: string;
  commitMessage: string;
  triggeredBy: string;
  duration: number | null;
  createdAt: string;
  updatedAt: string;
  stages: Stage[];
  artifacts: Artifact[];
  tenant_id: string;
  project_id: string;
  errorMessage: string | null;
}

export interface Artifact {
  artifactId: string;
  name: string;
  size: number;
}

export interface LogLine {
  lineNumber: number;
  timestamp: string;
  stream: "stdout" | "stderr";
  content: string;
}
