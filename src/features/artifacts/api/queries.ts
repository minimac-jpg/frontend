import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiError, apiDelete, apiDownload, apiFetch, apiGet } from "@/lib/api/client";
import { getComponentById, mockRecentSearches, searchComponents } from "./mock-data";
import type {
  BackendArtifactDto,
  Component,
  FormatType,
  SearchFilters,
  UploadArtifactRequest,
} from "./types";

function mapKindToFormat(kind: string | undefined): FormatType {
  switch (kind) {
    case "maven":
    case "npm":
    case "docker":
    case "pypi":
    case "nuget":
      return kind;
    default:
      return "generic";
  }
}

function extensionOf(name: string): string {
  const dot = name.lastIndexOf(".");
  if (dot <= 0 || dot === name.length - 1) return "bin";
  return name.slice(dot + 1).toLowerCase();
}

export function mapArtifactDtoToComponent(dto: BackendArtifactDto): Component {
  return {
    id: dto.artifact_id,
    group: dto.kind || "generic",
    name: dto.name,
    version: dto.build_id,
    format: mapKindToFormat(dto.kind),
    repository: dto.kind || "build-artifacts",
    extension: extensionOf(dto.name),
    sizeBytes: dto.size_bytes,
    modifiedAt: dto.created_at,
    createdAt: dto.created_at,
    checksums: {
      sha256: dto.checksum ?? "",
      sha1: "",
      md5: "",
    },
    assets: [
      {
        name: dto.name,
        sizeBytes: dto.size_bytes,
        contentType: dto.content_type ?? "application/octet-stream",
        downloadUrl: `/api/artifacts/${dto.artifact_id}/download`,
      },
    ],
    dependents: [],
    description: dto.status === "completed" ? null : `Upload status: ${dto.status}`,
  };
}

/**
 * Search / browse artifacts.
 *
 * Results come from the real artifacts service
 * (`GET /api/builds/{build_id}/artifacts`) and text/field filtering is
 * applied client-side. There is no backend "list all" route, so a Build ID
 * scope is required; without one the query stays idle and the screen shows
 * an empty-state prompt instead of mock data.
 */
export function useArtifactSearch(filters: SearchFilters) {
  return useQuery({
    queryKey: ["artifacts", "search", filters],
    queryFn: async () => {
      if (!filters.buildId) {
        return { results: [], total: 0 };
      }
      const data = await apiGet<{
        artifacts: BackendArtifactDto[];
        total: number;
      }>(`/api/artifacts?build_id=${encodeURIComponent(filters.buildId)}&limit=100`);
      const components = (data.artifacts ?? []).map(mapArtifactDtoToComponent);
      return searchComponents(filters, components);
    },
    enabled: !!filters.buildId,
  });
}

/**
 * Fetch full detail for a single artifact by its id.
 *
 * Tries the real artifacts service first (`GET /api/artifacts/{id}`) and
 * falls back to the local dataset when the id is not a backend artifact
 * (e.g. mock component ids from the fallback browse mode).
 */
export function useArtifactDetail(componentId: string) {
  return useQuery({
    queryKey: ["artifacts", "detail", componentId],
    queryFn: async () => {
      try {
        const data = await apiGet<{ artifact: BackendArtifactDto }>(
          `/api/artifacts/${encodeURIComponent(componentId)}`,
        );
        return mapArtifactDtoToComponent(data.artifact);
      } catch (err) {
        if (
          err instanceof ApiError &&
          (err.status === 404 || err.code === "NO_ROUTE" || err.code === "ARTIFACT_NOT_FOUND")
        ) {
          const component = getComponentById(componentId);
          if (component) return component;
        }
        throw err;
      }
    },
    enabled: !!componentId,
  });
}

/**
 * Return the list of recent searches.
 *
 * No backend route exists for search history yet — this stays local.
 */
export function useRecentSearches() {
  return useQuery({
    queryKey: ["artifacts", "recent-searches"],
    queryFn: async () => mockRecentSearches,
    staleTime: Infinity,
  });
}

/**
 * Upload a new artifact to the real artifacts service.
 *
 * The backend keys uploads by build (`POST /api/builds/{build_id}/artifacts`,
 * multipart), so both a build scope and a file are required — there is no
 * mock fallback.
 */
export function useUploadArtifact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req: UploadArtifactRequest) => {
      if (!req.buildId) {
        throw new ApiError("Build ID is required to upload an artifact.", "VALIDATION_ERROR", 400);
      }
      if (!req.file) {
        throw new ApiError("A file is required to upload an artifact.", "VALIDATION_ERROR", 400);
      }
      const form = new FormData();
      form.set("build_id", req.buildId);
      form.set("name", req.name);
      form.set("kind", req.format);
      if (req.classifier) form.set("step_id", req.classifier);
      if (req.file.type) form.set("content_type", req.file.type);
      form.set("file", req.file);
      const data = await apiFetch<{ artifact: BackendArtifactDto }>(
        "/api/artifacts",
        { method: "POST", body: form },
      );
      return mapArtifactDtoToComponent(data.artifact);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["artifacts"] });
    },
  });
}

/**
 * Download an artifact through the authenticated download endpoint
 * (`GET /api/artifacts/{id}/download`) and save it as a file.
 */
export function downloadArtifact(artifactId: string, filename: string): Promise<void> {
  return apiDownload(
    `/api/artifacts/${encodeURIComponent(artifactId)}/download`,
    filename,
  );
}

/**
 * Delete an artifact (`DELETE /api/artifacts/{id}`).
 */
export function useDeleteArtifact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (artifactId: string) => {
      await apiDelete<{ artifact_id: string; deleted: boolean }>(
        `/api/artifacts/${encodeURIComponent(artifactId)}`,
      );
      return artifactId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["artifacts"] });
      queryClient.invalidateQueries({ queryKey: ["pipelines"] });
    },
  });
}
