import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RotateCcwIcon,
  SearchIcon,
  SettingsIcon,
  UploadIcon,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toast";
import { useDebouncedValue } from "@/hooks/use-debounce";
import { useArtifactSearch } from "../api/queries";
import type { FormatType, SearchFilters } from "../api/types";
import { CoordinateFields } from "./CoordinateFields";
import { FormatFilterList } from "./FormatFilterList";
import { RecentSearches } from "./RecentSearches";
import { ResultsTable } from "./ResultsTable";
import { UploadArtifactDialog } from "./UploadArtifactDialog";

function filtersFromSearch(search: Record<string, unknown>): SearchFilters {
  const format = search.format;
  return {
    query: (search.q as string | undefined) || undefined,
    formats:
      Array.isArray(format) && format.length > 0
        ? (format as FormatType[])
        : typeof format === "string"
          ? [format as FormatType]
          : undefined,
    repository: (search.repository as string | undefined) || undefined,
    groupId: (search.groupId as string | undefined) || undefined,
    artifactId: (search.artifactId as string | undefined) || undefined,
    version: (search.version as string | undefined) || undefined,
    classifier: (search.classifier as string | undefined) || undefined,
    extension: (search.extension as string | undefined) || undefined,
    checksum: (search.checksum as string | undefined) || undefined,
    buildId: (search.buildId as string | undefined) || undefined,
  };
}

function hasAnyFilter(f: SearchFilters): boolean {
  return !!(
    f.query ||
    (f.formats && f.formats.length > 0) ||
    f.repository ||
    f.groupId ||
    f.artifactId ||
    f.version ||
    f.classifier ||
    f.extension ||
    f.checksum ||
    f.buildId
  );
}

export function ArtifactSearchScreen() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/artifacts/" });

  const committedFilters = useMemo(() => filtersFromSearch(search), [search]);
  const hasActiveFilters = hasAnyFilter(committedFilters);

  const [query, setQuery] = useState(committedFilters.query ?? "");
  const [selectedFormats, setSelectedFormats] = useState<FormatType[]>(
    committedFilters.formats ?? [],
  );
  const [repository, setRepository] = useState(committedFilters.repository ?? "");
  const [groupId, setGroupId] = useState(committedFilters.groupId ?? "");
  const [artifactId, setArtifactId] = useState(committedFilters.artifactId ?? "");
  const [version, setVersion] = useState(committedFilters.version ?? "");
  const [classifier, setClassifier] = useState(committedFilters.classifier ?? "");
  const [extension, setExtension] = useState(committedFilters.extension ?? "");
  const [checksum, setChecksum] = useState(committedFilters.checksum ?? "");
  const [buildId, setBuildId] = useState(committedFilters.buildId ?? "");
  const [advancedOpen, setAdvancedOpen] = useState(
    !!(
      committedFilters.groupId ||
      committedFilters.artifactId ||
      committedFilters.version ||
      committedFilters.classifier ||
      committedFilters.extension ||
      committedFilters.checksum ||
      committedFilters.buildId
    ),
  );
  const [uploadOpen, setUploadOpen] = useState(false);

  const debouncedQuery = useDebouncedValue(query, 250);

  const syncUrl = useCallback(
    (overrides: Partial<Record<string, string | string[] | undefined>>) => {
      navigate({
        to: "/artifacts",
        search: {
          q: (overrides.q !== undefined ? overrides.q : debouncedQuery || undefined) as
            | string
            | undefined,
          format:
            overrides.format !== undefined
              ? overrides.format
              : selectedFormats.length > 0
                ? selectedFormats
                : undefined,
          repository:
            overrides.repository !== undefined ? overrides.repository : repository || undefined,
          groupId: overrides.groupId !== undefined ? overrides.groupId : groupId || undefined,
          artifactId:
            overrides.artifactId !== undefined ? overrides.artifactId : artifactId || undefined,
          version: overrides.version !== undefined ? overrides.version : version || undefined,
          classifier:
            overrides.classifier !== undefined ? overrides.classifier : classifier || undefined,
          extension:
            overrides.extension !== undefined ? overrides.extension : extension || undefined,
          checksum: overrides.checksum !== undefined ? overrides.checksum : checksum || undefined,
          buildId: overrides.buildId !== undefined ? overrides.buildId : buildId || undefined,
        },
        replace: true,
      });
    },
    [
      navigate,
      debouncedQuery,
      selectedFormats,
      repository,
      groupId,
      artifactId,
      version,
      classifier,
      extension,
      checksum,
      buildId,
    ],
  );

  useEffect(() => {
    if (query !== committedFilters.query) {
      syncUrl({ q: query || undefined });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  useEffect(() => {
    setQuery(committedFilters.query ?? "");
    setSelectedFormats(committedFilters.formats ?? []);
    setRepository(committedFilters.repository ?? "");
    setGroupId(committedFilters.groupId ?? "");
    setArtifactId(committedFilters.artifactId ?? "");
    setVersion(committedFilters.version ?? "");
    setClassifier(committedFilters.classifier ?? "");
    setExtension(committedFilters.extension ?? "");
    setChecksum(committedFilters.checksum ?? "");
    setBuildId(committedFilters.buildId ?? "");
  }, [committedFilters]);

  const searchFilters: SearchFilters = useMemo(
    () => ({
      query: debouncedQuery || committedFilters.query,
      formats: selectedFormats.length > 0 ? selectedFormats : undefined,
      repository: repository || undefined,
      groupId: groupId || undefined,
      artifactId: artifactId || undefined,
      version: version || undefined,
      classifier: classifier || undefined,
      extension: extension || undefined,
      checksum: checksum || undefined,
      buildId: buildId || undefined,
    }),
    [
      debouncedQuery,
      committedFilters.query,
      selectedFormats,
      repository,
      groupId,
      artifactId,
      version,
      classifier,
      extension,
      checksum,
      buildId,
    ],
  );

  const { data, isLoading, error } = useArtifactSearch(searchFilters);

  const handleClearAll = useCallback(() => {
    setQuery("");
    setSelectedFormats([]);
    setRepository("");
    setGroupId("");
    setArtifactId("");
    setVersion("");
    setClassifier("");
    setExtension("");
    setChecksum("");
    setBuildId("");
    navigate({ to: "/artifacts", search: {} });
  }, [navigate]);

  const handleRecentSearchSelect = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Artifacts</h1>
        <p className="mt-1 text-sm text-muted-foreground">Search and manage build artifacts</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search artifacts…"
            className="pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="shrink-0 gap-1.5"
        >
          {advancedOpen ? (
            <ChevronDownIcon className="size-4" />
          ) : (
            <ChevronRightIcon className="size-4" />
          )}
          Advanced
        </Button>
        <Button size="sm" onClick={() => setUploadOpen(true)}>
          <UploadIcon className="size-4" />
          Upload Artifact
        </Button>
        <Link to="/artifacts/settings">
          <Button variant="ghost" size="icon-sm" aria-label="Artifact settings">
            <SettingsIcon className="size-4" />
          </Button>
        </Link>
      </div>

      {advancedOpen && (
        <div className="rounded-lg border bg-muted/30 p-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FormatFilterList
              selected={selectedFormats}
              onChange={(formats) => {
                setSelectedFormats(formats);
                syncUrl({ format: formats.length > 0 ? formats : undefined });
              }}
            />
            <div className="space-y-3">
              <CoordinateFields
                groupId={groupId}
                artifactId={artifactId}
                version={version}
                classifier={classifier}
                extension={extension}
                checksum={checksum}
                onGroupIdChange={(v) => {
                  setGroupId(v);
                  syncUrl({ groupId: v || undefined });
                }}
                onArtifactIdChange={(v) => {
                  setArtifactId(v);
                  syncUrl({ artifactId: v || undefined });
                }}
                onVersionChange={(v) => {
                  setVersion(v);
                  syncUrl({ version: v || undefined });
                }}
                onClassifierChange={(v) => {
                  setClassifier(v);
                  syncUrl({ classifier: v || undefined });
                }}
                onExtensionChange={(v) => {
                  setExtension(v);
                  syncUrl({ extension: v || undefined });
                }}
                onChecksumChange={(v) => {
                  setChecksum(v);
                  syncUrl({ checksum: v || undefined });
                }}
              />
            </div>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="filter-repository"
                  className="mb-1 block text-xs text-muted-foreground"
                >
                  Repository
                </label>
                <input
                  id="filter-repository"
                  placeholder="e.g. maven-releases"
                  value={repository}
                  onChange={(e) => {
                    setRepository(e.target.value);
                    syncUrl({ repository: e.target.value || undefined });
                  }}
                  className="h-8 w-full rounded-md border border-input bg-transparent px-2.5 text-xs shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
              <div>
                <label
                  htmlFor="filter-build-id"
                  className="mb-1 block text-xs text-muted-foreground"
                >
                  Build ID (UUID)
                </label>
                <input
                  id="filter-build-id"
                  placeholder="e.g. 0b3f7c1e-…"
                  value={buildId}
                  onChange={(e) => {
                    setBuildId(e.target.value);
                    syncUrl({ buildId: e.target.value || undefined });
                  }}
                  className="h-8 w-full rounded-md border border-input bg-transparent px-2.5 text-xs shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Required — artifacts are scoped per build.
                </p>
              </div>
              <RecentSearches onSelect={handleRecentSearchSelect} />
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="xs"
            onClick={handleClearAll}
            className="gap-1 text-muted-foreground"
          >
            <RotateCcwIcon className="size-3" />
            Clear
          </Button>
        )}
      </div>

      {!searchFilters.buildId ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-foreground">Enter a Build ID to search artifacts</p>
          <p className="mt-1 text-sm text-muted-foreground">
            The artifacts service lists artifacts per build — set a Build ID (UUID) under Advanced
            to browse its artifacts.
          </p>
        </div>
      ) : (
        <ResultsTable data={data} isLoading={isLoading} error={error} />
      )}

      <UploadArtifactDialog open={uploadOpen} onOpenChange={setUploadOpen} />
      <Toaster />
    </div>
  );
}
