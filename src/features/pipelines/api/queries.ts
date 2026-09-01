import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiError, apiGet, apiPost } from "@/lib/api/client";
import { authClient } from "@/lib/auth-client";
import type { Build, BuildTrigger, Job, JobStatus, LogLine } from "./types";

export function useTenantId(): { tenantId: string | null; isPending: boolean } {
  const { data: session, isPending } = authClient.useSession();
  const tenantId =
    session?.session?.activeOrganizationId ?? session?.user?.id ?? null;
  return { tenantId, isPending };
}

function requireTenantId(tenantId: string | null): string {
  if (!tenantId) {
    throw new ApiError("Not authenticated — please sign in.", "AUTH_REQUIRED", 401);
  }
  return tenantId;
}

interface BackendTriggerDto {
  kind?: string;
}

interface BackendPipelineMetadataDto {
  description?: string | null;
  tags?: string[];
  triggers?: BackendTriggerDto[];
  created_at?: string;
  updated_at?: string;
}

interface BackendPipelineDto {
  id: string;
  tenant_id: string;
  name: string;
  project_id: string;
  status: string;
  metadata?: BackendPipelineMetadataDto;
  triggers?: BackendTriggerDto[];
  created_at?: string;
  updated_at?: string;
}

interface BackendBuildResultDto {
  outcome?: string;
  exit_code?: number | null;
  error_message?: string | null;
  duration_secs?: number | null;
}

interface BackendBuildMetadataDto {
  tenant_id?: string;
  project_id?: string;
  pipeline_id?: string;
  commit_sha?: string | null;
  branch?: string | null;
  actor?: string | null;
  triggered_at?: string;
}

interface BackendBuildDto {
  id: string;
  tenant_id: string;
  number: number;
  kind?: string;
  state?: string;
  status?: string;
  result?: BackendBuildResultDto | null;
  metadata?: BackendBuildMetadataDto;
  created_at: string;
  updated_at: string;
}

interface BackendLogEntryDto {
  log_id: string;
  build_id: string;
  task_id?: string | null;
  stream: string;
  sequence: number;
  message: string;
  timestamp: string;
}

function mapPipelineStatus(status: string | undefined): JobStatus {
  switch (status) {
    case "active":
      return "active";
    case "disabled":
      return "disabled";
    case "archived":
      return "archived";
    default:
      return "draft";
  }
}

function mapTriggerKind(kind: string | undefined): BuildTrigger {
  if (kind === "schedule") return "scheduled";
  if (kind === "webhook") return "webhook";
  return "manual";
}

function mapJobTriggers(dto: BackendPipelineDto): BuildTrigger {
  const triggers = dto.triggers ?? dto.metadata?.triggers ?? [];
  for (const trigger of triggers) {
    const mapped = mapTriggerKind(trigger?.kind);
    if (mapped !== "manual") return mapped;
  }
  return "manual";
}

function mapJob(dto: BackendPipelineDto): Job {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.metadata?.description ?? null,
    status: mapPipelineStatus(dto.status),
    lastRunAt: null,
    lastDuration: null,
    branch: "",
    trigger: mapJobTriggers(dto),
    createdAt: dto.metadata?.created_at ?? dto.created_at ?? "",
    updatedAt: dto.metadata?.updated_at ?? dto.updated_at ?? "",
    tenant_id: dto.tenant_id,
    project_id: dto.project_id,
    tags: dto.metadata?.tags ?? [],
  };
}

function mapBuildStatus(dto: BackendBuildDto): JobStatus {
  const outcome = dto.result?.outcome;
  if (outcome === "success") return "success";
  if (outcome === "failure") return "failed";
  if (outcome === "cancelled") return "cancelled";
  if (outcome === "timeout") return "failed";
  switch (dto.status) {
    case "succeeded":
      return "success";
    case "failed":
      return "failed";
    case "cancelled":
      return "cancelled";
    case "timed_out":
      return "failed";
    case "running":
      return "running";
    default:
      return "queued";
  }
}

function mapBuildTrigger(kind: string | undefined): BuildTrigger {
  if (kind === "scheduled") return "scheduled";
  if (kind === "webhook") return "webhook";
  return "manual";
}

function mapBuild(dto: BackendBuildDto): Build {
  return {
    id: dto.id,
    jobId: dto.metadata?.pipeline_id ?? "",
    number: dto.number,
    status: mapBuildStatus(dto),
    state: dto.state ?? "",
    trigger: mapBuildTrigger(dto.kind),
    branch: dto.metadata?.branch ?? "",
    commitHash: dto.metadata?.commit_sha ?? "",
    commitMessage: "",
    triggeredBy: dto.metadata?.actor ?? "",
    duration: dto.result?.duration_secs != null ? dto.result.duration_secs * 1000 : null,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    stages: [],
    artifacts: [],
    tenant_id: dto.tenant_id,
    project_id: dto.metadata?.project_id ?? "",
    errorMessage: dto.result?.error_message ?? null,
  };
}

function mapLogLine(entry: BackendLogEntryDto): LogLine {
  return {
    lineNumber: entry.sequence,
    timestamp: entry.timestamp,
    stream: entry.stream === "stderr" ? "stderr" : "stdout",
    content: entry.message,
  };
}

function isBuildLike(value: unknown): value is Build {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "number" in value &&
    "status" in value &&
    "stages" in value &&
    "artifacts" in value
  );
}

function findCachedBuild(
  client: ReturnType<typeof useQueryClient>,
  buildId: string,
): Build | undefined {
  for (const query of client.getQueryCache().getAll()) {
    const data: unknown = query.state.data;
    if (!data) continue;
    if (isBuildLike(data) && data.id === buildId) return data;
    if (Array.isArray(data)) {
      const hit = data.find((d): d is Build => isBuildLike(d) && d.id === buildId);
      if (hit) return hit;
    }
  }
  return undefined;
}

export function useJobs() {
  const { tenantId, isPending } = useTenantId();
  return useQuery({
    queryKey: ["pipelines", "jobs", tenantId],
    queryFn: async () => {
      requireTenantId(tenantId);
      const data = await apiGet<{ items: BackendPipelineDto[] }>("/api/pipelines?limit=100");
      return (data.items ?? []).map(mapJob);
    },
    enabled: !isPending,
  });
}

export function useJob(jobId: string) {
  const { tenantId, isPending } = useTenantId();
  return useQuery({
    queryKey: ["pipelines", "jobs", tenantId, jobId],
    queryFn: async () => {
      requireTenantId(tenantId);
      const pipeline = await apiGet<BackendPipelineDto>(
        `/api/pipelines/${encodeURIComponent(jobId)}`,
      );
      return mapJob(pipeline);
    },
    enabled: !isPending && !!jobId,
  });
}

export function useBuilds(jobId: string) {
  const { tenantId, isPending } = useTenantId();
  return useQuery({
    queryKey: ["pipelines", "jobs", tenantId, jobId, "builds"],
    queryFn: async () => {
      requireTenantId(tenantId);
      const data = await apiGet<{ builds: BackendBuildDto[]; total: number }>(
        `/api/builds?pipeline_id=${encodeURIComponent(jobId)}&limit=50`,
      );
      return (data.builds ?? []).map(mapBuild);
    },
    enabled: !isPending && !!jobId,
    refetchInterval: (query) => {
      const data = query.state.data as Build[] | undefined;
      if (!data) return false;
      const hasActive = data.some((b) => b.status === "running" || b.status === "queued");
      return hasActive ? 3000 : false;
    },
  });
}

export function useBuild(jobId: string, buildId: string) {
  return useQuery({
    queryKey: ["pipelines", "jobs", jobId, "builds", buildId],
    queryFn: async () => {
      const data = await apiGet<{ build: BackendBuildDto }>(
        `/api/builds/${encodeURIComponent(buildId)}`,
      );
      return mapBuild(data.build);
    },
    enabled: !!jobId && !!buildId,
    refetchInterval: (query) => {
      const data = query.state.data as Build | undefined;
      if (!data) return false;
      return data.status === "running" || data.status === "queued" ? 3000 : false;
    },
  });
}

interface BackendArtifactListDto {
  artifacts: {
    artifact_id: string;
    name: string;
    size_bytes: number;
  }[];
  total: number;
}

export function useBuildArtifacts(buildId: string) {
  return useQuery({
    queryKey: ["pipelines", "builds", buildId, "artifacts"],
    queryFn: async () => {
      const data = await apiGet<BackendArtifactListDto>(
        `/api/artifacts?build_id=${encodeURIComponent(buildId)}&limit=100`,
      );
      return (data.artifacts ?? []).map((artifact) => ({
        artifactId: artifact.artifact_id,
        name: artifact.name,
        size: artifact.size_bytes,
      }));
    },
    enabled: !!buildId,
  });
}

export function useConsoleLog(buildId: string) {
  const queryClient = useQueryClient();
  const cachedBuild = findCachedBuild(queryClient, buildId);
  const isActive = cachedBuild?.status === "running" || cachedBuild?.status === "queued";

  return useQuery({
    queryKey: ["pipelines", "logs", buildId],
    queryFn: async () => {
      const data = await apiGet<{
        entries: BackendLogEntryDto[];
        has_more: boolean;
        next_cursor: number | null;
      }>(`/api/builds/${encodeURIComponent(buildId)}/logs?limit=200`);
      return (data.entries ?? []).map(mapLogLine);
    },
    enabled: !!buildId,
    refetchInterval: isActive ? 3000 : false,
  });
}

export function useTriggerBuild() {
  const queryClient = useQueryClient();
  const { tenantId } = useTenantId();
  return useMutation({
    mutationFn: async (job: Job) => {
      const data = await apiPost<{ build: BackendBuildDto }>("/api/builds", {
        project_id: job.project_id,
        pipeline_id: job.id,
        actor: tenantId ?? undefined,
      });
      return mapBuild(data.build);
    },
    onSuccess: (_data, job) => {
      queryClient.invalidateQueries({
        queryKey: ["pipelines", "jobs", job.tenant_id, job.id, "builds"],
      });
      queryClient.invalidateQueries({ queryKey: ["pipelines", "jobs", job.tenant_id, job.id] });
      queryClient.invalidateQueries({ queryKey: ["pipelines", "jobs"] });
    },
  });
}

export function useStopBuild() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ buildId }: { jobId: string; buildId: string }) => {
      const data = await apiPost<{ build: BackendBuildDto }>(
        `/api/builds/${encodeURIComponent(buildId)}/cancel`,
        {},
      );
      return mapBuild(data.build);
    },
    onSuccess: (_data, { jobId, buildId }) => {
      queryClient.invalidateQueries({ queryKey: ["pipelines", "jobs", jobId, "builds", buildId] });
      queryClient.invalidateQueries({ queryKey: ["pipelines", "jobs", jobId, "builds"] });
      queryClient.invalidateQueries({ queryKey: ["pipelines", "jobs", jobId] });
      queryClient.invalidateQueries({ queryKey: ["pipelines", "jobs"] });
    },
  });
}

export function useRecentBuilds(limit = 10) {
  const { tenantId, isPending } = useTenantId();
  return useQuery({
    queryKey: ["pipelines", "recent-builds", tenantId, limit],
    queryFn: async () => {
      requireTenantId(tenantId);
      const data = await apiGet<{ builds: BackendBuildDto[]; total: number }>(
        `/api/builds?limit=${limit}`,
      );
      return (data.builds ?? [])
        .map(mapBuild)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit);
    },
    enabled: !isPending,
  });
}
