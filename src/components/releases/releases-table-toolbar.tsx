import { Search, XIcon, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Release, ReleaseStatus } from "@/types/release";

export type FilterState = {
  search: string;
  statuses: ReleaseStatus[];
};

export const defaultFilterState: FilterState = {
  search: "",
  statuses: [],
};

const allStatuses: ReleaseStatus[] = [
  "draft",
  "pending_approval",
  "approved",
  "published",
  "failed",
  "cancelled",
  "archived",
];

const statusLabels: Record<ReleaseStatus, string> = {
  draft: "Draft",
  pending_approval: "Pending approval",
  approved: "Approved",
  published: "Published",
  failed: "Failed",
  cancelled: "Cancelled",
  archived: "Archived",
};

function countBy(items: Release[], key: (r: Release) => ReleaseStatus): Map<ReleaseStatus, number> {
  const counts = new Map<ReleaseStatus, number>();
  for (const item of items) {
    const k = key(item);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return counts;
}

interface ReleasesTableToolbarProps {
  filter: FilterState;
  onFilterChange: (filter: FilterState) => void;
  data: Release[];
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
  hideDrawer?: boolean;
  drawerOnly?: boolean;
}

export function ReleasesTableToolbar({
  filter,
  onFilterChange,
  data,
  isDrawerOpen,
  onToggleDrawer,
  hideDrawer = false,
  drawerOnly = false,
}: ReleasesTableToolbarProps) {
  const activeFilterCount = filter.statuses.length;

  function update(partial: Partial<FilterState>) {
    onFilterChange({ ...filter, ...partial });
  }

  function clearAll() {
    onFilterChange(defaultFilterState);
  }

  function removeStatus(status: ReleaseStatus) {
    update({ statuses: filter.statuses.filter((s) => s !== status) });
  }

  function matchesSearch(r: Release): boolean {
    if (!filter.search) return true;
    const q = filter.search.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.version.toLowerCase().includes(q) ||
      (r.projectName ?? "").toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q) ||
      (r.title ?? "").toLowerCase().includes(q) ||
      r.status.toLowerCase().includes(q)
    );
  }

  function filteredWithout(category: "statuses"): Release[] {
    return data.filter((r) => {
      if (!matchesSearch(r)) return false;
      if (category !== "statuses" && filter.statuses.length > 0) {
        if (!filter.statuses.includes(r.status)) return false;
      }
      return true;
    });
  }

  const statusFacetCounts = countBy(filteredWithout("statuses"), (r) => r.status);

  const pills: { id: string; label: string; onRemove: () => void }[] = [];
  for (const s of filter.statuses) {
    pills.push({
      id: `status-${s}`,
      label: statusLabels[s] ?? s,
      onRemove: () => removeStatus(s),
    });
  }

  return (
    <div className="space-y-2">
      {!drawerOnly && (
        <div className="flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search releases..."
              value={filter.search}
              onChange={(e) => update({ search: e.target.value })}
              className="h-8 pl-8"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleDrawer}
            className={cn(
              "relative h-8",
              isDrawerOpen && "bg-accent text-accent-foreground",
            )}
          >
            <SlidersHorizontal className="mr-1.5 size-3.5" />
            Filter
            {activeFilterCount > 0 && (
              <Badge
                variant="secondary"
                className="ml-1.5 size-4 rounded-full p-0 text-[10px] font-medium tabular-nums leading-none flex items-center justify-center"
              >
                {activeFilterCount}
              </Badge>
            )}
          </Button>
          {pills.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {pills.map((pill) => (
                <Badge
                  key={pill.id}
                  variant="secondary"
                  className="h-6 gap-1 px-2 text-xs font-normal"
                >
                  {pill.label}
                  <button
                    type="button"
                    onClick={pill.onRemove}
                    className="ml-0.5 rounded-full hover:bg-gray-200/90 p-0.5"
                  >
                    <XIcon className="size-3" />
                    <span className="sr-only">Remove {pill.label} filter</span>
                  </button>
                </Badge>
              ))}
              <button
                type="button"
                onClick={clearAll}
                className="text-xs text-muted-foreground hover:text-foreground underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}

      {isDrawerOpen && !hideDrawer && (
        <div className="border rounded-md p-4 bg-card space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground">Status</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {allStatuses.map((s) => {
                const count = statusFacetCounts.get(s) ?? 0;
                const isChecked = filter.statuses.includes(s);
                const id = `filter-status-${s}`;
                return (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded-sm px-1 py-1 text-sm hover:bg-gray-200/90"
                  >
                    <Checkbox
                      id={id}
                      checked={isChecked}
                      onCheckedChange={() => {
                        update({
                          statuses: isChecked
                            ? filter.statuses.filter((st) => st !== s)
                            : [...filter.statuses, s],
                        });
                      }}
                    />
                    <label htmlFor={id} className="flex items-center gap-3 cursor-pointer min-w-0">
                      <span className="truncate">{statusLabels[s] ?? s}</span>
                      <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                        {count}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="ghost" size="sm" onClick={clearAll} className="h-8 text-xs">
              Reset all
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
