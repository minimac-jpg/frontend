import { useCallback, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useReleases } from "@/hooks/use-releases";
import type { Release } from "@/types/release";
import { createColumns } from "./columns";
import { ReleaseDialog } from "./release-dialog";
import { ReleasesDataTable } from "./releases-data-table";
import {
  ReleasesTableToolbar,
  defaultFilterState,
  type FilterState,
} from "./releases-table-toolbar";

function matchRelease(release: Release, filter: FilterState): boolean {
  if (filter.search) {
    const q = filter.search.toLowerCase();
    const matched =
      release.name.toLowerCase().includes(q) ||
      release.version.toLowerCase().includes(q) ||
      (release.projectName ?? "").toLowerCase().includes(q) ||
      release.id.toLowerCase().includes(q) ||
      (release.title ?? "").toLowerCase().includes(q) ||
      release.status.toLowerCase().includes(q);
    if (!matched) return false;
  }

  if (filter.statuses.length > 0 && !filter.statuses.includes(release.status)) return false;

  return true;
}

export function ReleasesPage() {
  const { data: allReleases = [], isLoading, isError, error } = useReleases();
  const [tab, setTab] = useState("active");
  const [filter, setFilter] = useState<FilterState>(defaultFilterState);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingRelease, setEditingRelease] = useState<Release | undefined>(undefined);

  const activeReleases = useMemo(
    () => allReleases.filter((r) => r.status !== "archived"),
    [allReleases],
  );
  const archivedReleases = useMemo(
    () => allReleases.filter((r) => r.status === "archived"),
    [allReleases],
  );

  const sourceData = tab === "active" ? activeReleases : archivedReleases;

  const filteredData = useMemo(
    () => sourceData.filter((r) => matchRelease(r, filter)),
    [sourceData, filter],
  );

  const handleCreateRelease = useCallback(() => {
    setEditingRelease(undefined);
    setDialogOpen(true);
  }, []);

  const handleEdit = useCallback((release: Release) => {
    setEditingRelease(release);
    setDialogOpen(true);
  }, []);

  const handleSave = useCallback(() => {
    setDialogOpen(false);
    setEditingRelease(undefined);
  }, []);

  const columns = useMemo(() => createColumns(handleEdit), [handleEdit]);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Releases</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage software releases across environments
          </p>
        </div>
        <Button onClick={handleCreateRelease}>
          <Plus className="mr-1.5 size-4" />
          Create release
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          Loading releases…
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center gap-2 py-20 text-muted-foreground">
          <p className="text-sm font-medium text-destructive">Failed to load releases</p>
          <p className="text-xs">{error instanceof Error ? error.message : "Unknown error"}</p>
        </div>
      ) : (
        <Tabs value={tab} onValueChange={(v) => { setTab(v); setIsDrawerOpen(false); }}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <TabsList>
                <TabsTrigger value="active" className="gap-1.5">
                  Active
                  <Badge variant="secondary" className="rounded-full px-1.5 text-[11px] font-normal tabular-nums">
                    {activeReleases.length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="archived" className="gap-1.5">
                  Archived
                  <Badge variant="secondary" className="rounded-full px-1.5 text-[11px] font-normal tabular-nums">
                    {archivedReleases.length}
                  </Badge>
                </TabsTrigger>
              </TabsList>
              <ReleasesTableToolbar
                filter={filter}
                onFilterChange={setFilter}
                data={sourceData}
                isDrawerOpen={isDrawerOpen}
                onToggleDrawer={() => setIsDrawerOpen((v) => !v)}
                hideDrawer
              />
            </div>
            {isDrawerOpen && (
              <ReleasesTableToolbar
                filter={filter}
                onFilterChange={setFilter}
                data={sourceData}
                isDrawerOpen={isDrawerOpen}
                onToggleDrawer={() => setIsDrawerOpen((v) => !v)}
                drawerOnly
              />
            )}
          </div>
          <TabsContent value={tab} className="mt-4 space-y-4">
            <ReleasesDataTable columns={columns} data={filteredData} />
          </TabsContent>
        </Tabs>
      )}

      <ReleaseDialog
        key={editingRelease?.id ?? "create"}
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setEditingRelease(undefined);
        }}
        release={editingRelease}
        onSave={handleSave}
      />
    </div>
  );
}
