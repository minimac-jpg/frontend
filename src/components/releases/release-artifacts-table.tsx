import { useMemo, useState } from "react";
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { format } from "date-fns";
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon, Pencil, Search, SlidersHorizontal, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { ReleaseArtifactRow } from "@/types/release";

const appKeys = ["JAVA", "SPRINGBOOT", "WWW", "REACT"];

interface ArtifactFilterState {
  search: string;
  appKeys: string[];
  updatedAtFrom: string;
  updatedAtTo: string;
  deployedAtFrom: string;
  deployedAtTo: string;
}

const defaultFilter: ArtifactFilterState = {
  search: "",
  appKeys: [],
  updatedAtFrom: "",
  updatedAtTo: "",
  deployedAtFrom: "",
  deployedAtTo: "",
};

export function ReleaseArtifactsTable({ data }: { data: ReleaseArtifactRow[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filter, setFilter] = useState<ArtifactFilterState>(defaultFilter);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function update(partial: Partial<ArtifactFilterState>) {
    setFilter((prev) => ({ ...prev, ...partial }));
  }

  function clearAll() {
    setFilter(defaultFilter);
  }

  const filteredData = useMemo(() => {
    return data.filter((a) => {
      if (filter.search) {
        const q = filter.search.toLowerCase();
        const matched =
          a.name.toLowerCase().includes(q) ||
          a.appKey.toLowerCase().includes(q) ||
          a.version.toLowerCase().includes(q) ||
          a.ticketNumber.toLowerCase().includes(q);
        if (!matched) return false;
      }
      if (filter.appKeys.length > 0 && !filter.appKeys.includes(a.appKey)) return false;
      if (filter.updatedAtFrom && a.updatedAt && a.updatedAt < filter.updatedAtFrom) return false;
      if (filter.updatedAtTo && a.updatedAt && a.updatedAt > filter.updatedAtTo) return false;
      if (filter.deployedAtFrom && a.deployedAt && a.deployedAt < filter.deployedAtFrom) return false;
      if (filter.deployedAtTo && a.deployedAt && a.deployedAt > filter.deployedAtTo) return false;
      return true;
    });
  }, [data, filter]);

  const sortedData = useMemo(
    () => [...filteredData].sort((a, b) => Number(a.isRemoved) - Number(b.isRemoved)),
    [filteredData],
  );

  const activeCount = data.filter((a) => !a.isRemoved).length;
  const removedCount = data.filter((a) => a.isRemoved).length;

  const appKeyFacetCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const a of data) {
      counts.set(a.appKey, (counts.get(a.appKey) ?? 0) + 1);
    }
    return counts;
  }, [data]);

  const columns: ColumnDef<ReleaseArtifactRow>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              Name
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => {
          const a = row.original;
          return (
            <span className="inline-flex items-center gap-2 font-medium text-sm">
              <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", a.isRemoved ? "bg-zinc-400" : "bg-green-500")} />
              {a.name}
            </span>
          );
        },
      },
      {
        accessorKey: "appKey",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              App Key
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => (
          <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground bg-muted">
            {row.original.appKey}
          </span>
        ),
      },
      {
        id: "version",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              Version
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => (
          <div className="flex flex-col leading-snug">
            <span className="font-semibold">{row.original.version}</span>
            <span className="text-muted-foreground/70 text-xs">Build: {row.original.buildNumber}</span>
            <span className="text-muted-foreground/70 text-xs">Hash: {row.original.hash}</span>
          </div>
        ),
      },
      {
        accessorKey: "buildTime",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              Build Time
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => {
          try { return format(new Date(row.original.buildTime), "MMM d, yyyy"); } catch { return row.original.buildTime; }
        },
      },
      {
        accessorKey: "updatedAt",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              Updated At
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => {
          try { return format(new Date(row.original.updatedAt), "MMM d, yyyy"); } catch { return row.original.updatedAt; }
        },
      },
      {
        accessorKey: "deployedAt",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              Deployed At
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => {
          if (!row.original.deployedAt) return <span className="text-muted-foreground">—</span>;
          try { return format(new Date(row.original.deployedAt), "MMM d, yyyy"); } catch { return row.original.deployedAt; }
        },
      },
      {
        accessorKey: "ticketNumber",
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1 text-xs font-medium">
              Ticket
              {sorted === "asc" ? <ArrowUpIcon className="size-3" /> : sorted === "desc" ? <ArrowDownIcon className="size-3" /> : <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />}
            </span>
          );
        },
        cell: ({ row }) => <span className="text-muted-foreground">{row.original.ticketNumber}</span>,
      },
      {
        id: "actions",
        enableSorting: false,
        header: () => <div className="w-16" />,
        cell: ({ row }) => {
          const a = row.original;
          if (a.isRemoved) {
            return (
              <div className="flex justify-end">
                <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700">
                  <span className="mr-1 text-lg leading-none">+</span> Restore
                </Button>
              </div>
            );
          }
          return (
            <div className="flex justify-end gap-1">
              <Button size="sm" className="h-7 w-7 p-0 bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Pencil className="size-3.5" />
              </Button>
              <Button size="sm" variant="destructive" className="h-7 w-7 p-0">
                <Trash className="size-3.5" />
              </Button>
            </div>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    data: sortedData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const activeFilterCount =
    filter.appKeys.length +
    (filter.updatedAtFrom || filter.updatedAtTo ? 1 : 0) +
    (filter.deployedAtFrom || filter.deployedAtTo ? 1 : 0);

  return (
    <div>
      {/* Release status badges */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 text-green-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
          Latest build not deployed
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Not yet deployed
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          Latest build deployed
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary text-muted-foreground px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
          Removed from release
        </span>
      </div>

      {/* Artifacts header with search and filter */}
      <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold">Artifacts</h3>
          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700 text-[11px] font-bold uppercase tracking-wide dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
            {activeCount} Active
          </Badge>
          <Badge variant="outline" className="border-border bg-secondary text-muted-foreground text-[11px] font-bold uppercase tracking-wide">
            {removedCount} Removed
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search artifacts..."
              value={filter.search}
              onChange={(e) => update({ search: e.target.value })}
              className="h-9 pl-8"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className={cn("h-9 w-9", drawerOpen && "bg-accent")}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <SlidersHorizontal className="size-4" />
          </Button>
        </div>
      </div>

      {/* Filter drawer */}
      {drawerOpen && (
        <div className="rounded-lg border border-border bg-card overflow-hidden mb-4">
          <div className="grid grid-cols-3 divide-x divide-border">
            <div className="p-4 space-y-2">
              <Label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">App Key</Label>
              <div className="space-y-1">
                {appKeys.map((ak) => {
                  const count = appKeyFacetCounts.get(ak) ?? 0;
                  const isChecked = filter.appKeys.includes(ak);
                  const id = `ak-${ak}`;
                  return (
                    <div key={ak} className="flex items-center gap-2 py-1 text-sm">
                      <Checkbox
                        id={id}
                        checked={isChecked}
                        onCheckedChange={() => {
                          update({
                            appKeys: isChecked
                              ? filter.appKeys.filter((k) => k !== ak)
                              : [...filter.appKeys, ak],
                          });
                        }}
                      />
                      <label htmlFor={id} className="flex items-center gap-3 cursor-pointer min-w-0">
                        <span className="truncate">{ak}</span>
                        <span className="text-xs text-muted-foreground tabular-nums shrink-0">{count}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-4 space-y-3">
              <Label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">Updated At</Label>
              <div className="space-y-2">
                <Input type="date" value={filter.updatedAtFrom} onChange={(e) => update({ updatedAtFrom: e.target.value })} className="h-8 text-xs" placeholder="From" />
                <Input type="date" value={filter.updatedAtTo} min={filter.updatedAtFrom || undefined} onChange={(e) => update({ updatedAtTo: e.target.value })} className="h-8 text-xs" placeholder="To" />
              </div>
            </div>
            <div className="p-4 space-y-3">
              <Label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">Deployed At</Label>
              <div className="space-y-2">
                <Input type="date" value={filter.deployedAtFrom} onChange={(e) => update({ deployedAtFrom: e.target.value })} className="h-8 text-xs" placeholder="From" />
                <Input type="date" value={filter.deployedAtTo} min={filter.deployedAtFrom || undefined} onChange={(e) => update({ deployedAtTo: e.target.value })} className="h-8 text-xs" placeholder="To" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end px-4 py-2.5 border-t border-border bg-secondary/50">
            {activeFilterCount > 0 && (
              <button onClick={clearAll} className="text-xs text-muted-foreground underline decoration-border hover:text-foreground transition-colors">
                Reset all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Artifacts table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide",
                      header.column.getCanSort() && "cursor-pointer select-none hover:text-foreground",
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => {
                const a = row.original;
                return (
                  <TableRow
                    key={row.id}
                    className={cn(
                      "border-b border-border last:border-b-0",
                      a.isRemoved && "opacity-50",
                    )}
                    style={a.isRemoved ? {} : { boxShadow: "inset 3px 0 0 0 " + (a.deployedAt ? "#22c55e" : "#f59e0b") }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  No artifacts match your search or filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
