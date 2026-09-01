import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGet, apiPost, apiPut } from "@/lib/api/client";
import type {
  CreateReleaseInput,
  Release,
  ReleaseArtifactRow,
  ReleaseKind,
  ReleaseNoteDto,
  ReleaseStatus,
  ReleaseTimelineEventDto,
  UpdateReleaseInput,
} from "@/types/release";

const RELEASES_KEY = "releases";

interface BackendReleaseSummaryDto {
  id: string;
  tenant_id: string;
  project_id: string;
  version: string;
  status: ReleaseStatus;
  created_at: string;
  published_at: string | null;
}

interface BackendReleaseVersionDto {
  semantic_version: string;
  prerelease?: string | null;
  build_metadata?: string | null;
  source_tag?: string | null;
  source_commit?: string | null;
}

interface BackendReleaseMetadataDto {
  title?: string | null;
  build_id?: string | null;
}

interface BackendReleaseDto {
  id: string;
  tenant_id: string;
  project_id: string;
  version: BackendReleaseVersionDto;
  kind: ReleaseKind;
  status: ReleaseStatus;
  target: {
    environment_id: string | null;
    channel: { type: string; value?: string } | null;
  };
  notes: ReleaseNoteDto[];
  metadata: BackendReleaseMetadataDto;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  timeline?: {
    release_id?: string | null;
    events?: ReleaseTimelineEventDto[];
  };
}

interface BackendReleaseArtifactDto {
  artifact_id: string;
  name: string;
  kind?: string | null;
  checksum?: string | null;
  size_bytes: number;
  required: boolean;
}

interface BackendProjectDto {
  id: string;
  name: string;
}

async function fetchProjectNames(): Promise<Map<string, string>> {
  const data = await apiGet<{ projects: BackendProjectDto[]; total: number }>(
    "/api/projects?limit=200",
  );
  return new Map(data.projects.map((project) => [project.id, project.name]));
}

function releaseDisplayName(version: string, projectName: string | null): string {
  return projectName ? `${projectName} ${version}` : version;
}

function mapSummary(
  dto: BackendReleaseSummaryDto,
  projectNames: Map<string, string>,
): Release {
  const projectName = projectNames.get(dto.project_id) ?? null;
  return {
    id: dto.id,
    name: releaseDisplayName(dto.version, projectName),
    version: dto.version,
    title: null,
    kind: null,
    status: dto.status,
    projectId: dto.project_id,
    projectName,
    target: { environment_id: null, channel: null },
    notes: [],
    buildId: null,
    createdAt: dto.created_at,
    updatedAt: dto.created_at,
    publishedAt: dto.published_at,
  };
}

function mapFull(
  dto: BackendReleaseDto,
  projectNames: Map<string, string>,
): Release {
  const projectName = projectNames.get(dto.project_id) ?? null;
  return {
    id: dto.id,
    name: releaseDisplayName(dto.version.semantic_version, projectName),
    version: dto.version.semantic_version,
    title: dto.metadata.title ?? null,
    kind: dto.kind,
    status: dto.status,
    projectId: dto.project_id,
    projectName,
    target: dto.target,
    notes: dto.notes ?? [],
    buildId: dto.metadata.build_id ?? null,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    publishedAt: dto.published_at,
  };
}

function mapArtifact(
  dto: BackendReleaseArtifactDto,
  releaseVersion: string,
): ReleaseArtifactRow {
  return {
    id: dto.artifact_id,
    name: dto.name,
    kind: dto.kind ?? null,
    checksum: dto.checksum ?? null,
    sizeBytes: dto.size_bytes,
    required: dto.required,
    appKey: dto.kind ?? "",
    version: releaseVersion,
    buildNumber: 0,
    hash: dto.checksum ?? "",
    buildTime: "",
    updatedAt: "",
    deployedAt: null,
    ticketNumber: "",
    isRemoved: false,
  };
}

export function useReleases() {
  return useQuery({
    queryKey: [RELEASES_KEY],
    queryFn: async () => {
      const [list, projectNames] = await Promise.all([
        apiGet<{ releases: BackendReleaseSummaryDto[]; total: number }>(
          "/api/releases?limit=100",
        ),
        fetchProjectNames().catch(() => new Map<string, string>()),
      ]);
      return list.releases.map((dto) => mapSummary(dto, projectNames));
    },
  });
}

export function useRelease(releaseId: string) {
  return useQuery({
    queryKey: [RELEASES_KEY, releaseId],
    queryFn: async () => {
      const [data, projectNames] = await Promise.all([
        apiGet<{ release: BackendReleaseDto }>(
          `/api/releases/${encodeURIComponent(releaseId)}`,
        ),
        fetchProjectNames().catch(() => new Map<string, string>()),
      ]);
      return {
        release: mapFull(data.release, projectNames),
        timeline: data.release.timeline?.events ?? [],
      };
    },
    enabled: !!releaseId,
  });
}

export function useReleaseArtifacts(releaseId: string, releaseVersion: string) {
  return useQuery({
    queryKey: [RELEASES_KEY, releaseId, "artifacts", releaseVersion],
    queryFn: async () => {
      const data = await apiGet<{ artifacts: BackendReleaseArtifactDto[] }>(
        `/api/releases/${encodeURIComponent(releaseId)}/artifacts`,
      );
      return (data.artifacts ?? []).map((dto) => mapArtifact(dto, releaseVersion));
    },
    enabled: !!releaseId,
  });
}

export interface ProjectOption {
  id: string;
  name: string;
}

export function useProjectOptions() {
  return useQuery({
    queryKey: ["projects", "options"],
    queryFn: async () => {
      const data = await apiGet<{ projects: BackendProjectDto[]; total: number }>(
        "/api/projects?limit=200",
      );
      return data.projects.map((project) => ({ id: project.id, name: project.name }));
    },
  });
}

export function useCreateRelease() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateReleaseInput) => {
      const data = await apiPost<{ release: BackendReleaseDto }>("/api/releases", {
        project_id: input.projectId,
        version: input.version,
        title: input.title,
        notes: input.notes ?? [],
      });
      return mapFull(data.release, new Map());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RELEASES_KEY] });
    },
  });
}

export function useUpdateRelease(releaseId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateReleaseInput) => {
      const data = await apiPut<{ release: BackendReleaseDto }>(
        `/api/releases/${encodeURIComponent(releaseId)}`,
        {
          title: input.title,
          notes: input.notes,
        },
      );
      return mapFull(data.release, new Map());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RELEASES_KEY] });
    },
  });
}

type ReleaseLifecycleAction = "submit" | "approve" | "publish" | "cancel";

function useReleaseLifecycleMutation(action: ReleaseLifecycleAction) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (releaseId: string) => {
      const data = await apiPost<{ release: BackendReleaseDto }>(
        `/api/releases/${encodeURIComponent(releaseId)}/${action}`,
        {},
      );
      return mapFull(data.release, new Map());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RELEASES_KEY] });
    },
  });
}

export function useSubmitRelease() {
  return useReleaseLifecycleMutation("submit");
}

export function useApproveRelease() {
  return useReleaseLifecycleMutation("approve");
}

export function usePublishRelease() {
  return useReleaseLifecycleMutation("publish");
}

export function useCancelRelease() {
  return useReleaseLifecycleMutation("cancel");
}
