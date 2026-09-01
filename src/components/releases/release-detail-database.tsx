import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Plus, Trash, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { databaseScripts } from "@/data/dummyData";
import { PageTitle } from "../common/page-title";

interface DatabaseTabProps {
  releaseName: string;
}

type SortKey = "name" | "database" | "type" | "hash" | "pullRequest" | "createdAt" | "updatedAt" | "deployedAt";

export function DatabaseTab({ releaseName }: DatabaseTabProps) {
  const data = useMemo(
    () => databaseScripts.filter((d) => d.releaseName === releaseName),
    [releaseName],
  );

  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const active = data.filter((d) => !d.isRemoved);
  const removed = data.filter((d) => d.isRemoved);

  const sorted = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const cmp = String(aVal).localeCompare(String(bVal));
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [data, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function renderSortHead(label: string, key: SortKey) {
    const active = sortKey === key;
    return (
      <TableHead
        className="cursor-pointer select-none text-[11px] font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
        onClick={() => toggleSort(key)}
      >
        <span className="inline-flex items-center gap-1">
          {label}
          <ArrowUpDown className={cn("size-3", active && "text-foreground")} />
        </span>
      </TableHead>
    );
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mt-4 mb-3 flex-wrap">
        <PageTitle
          title="Database"
          subtitle="Database migrations and changes for this release."
          greenBadge={active.length > 0 ? `${active.length} Active` : undefined}
          badge={removed.length > 0 ? `${removed.length} Removed` : undefined}
          hasSidebar
        />
        <Button size="sm" className="h-8 text-xs gap-1.5 shrink-0">
          <Plus className="size-3.5" />
          Create Deployment
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8" />
              {renderSortHead("Name", "name")}
              {renderSortHead("Database", "database")}
              {renderSortHead("Type", "type")}
              {renderSortHead("Hash", "hash")}
              {renderSortHead("Pull Request", "pullRequest")}
              {renderSortHead("Created At", "createdAt")}
              {renderSortHead("Updated At", "updatedAt")}
              {renderSortHead("Deployed At", "deployedAt")}
              <TableHead className="w-16 text-center text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                {/* Actions */}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.length > 0 ? (
              sorted.flatMap((row, i) => {
                const rowKey = `db-row-${i}`;
                const isExpanded = expanded.has(rowKey);
                const isRemoved = row.isRemoved;
                const rows = [
                  <TableRow
                    key={rowKey}
                    className={cn(
                      "border-b border-border cursor-pointer",
                      isRemoved && "opacity-50",
                    )}
                    onClick={() => row.fileNames.length > 0 && toggleExpand(rowKey)}
                  >
                    <TableCell className="py-3">
                      {row.fileNames.length > 0 && (
                        <span className="inline-flex items-center justify-center size-6 rounded-md text-muted-foreground">
                          {isExpanded ? (
                            <ChevronDown className="size-3.5" />
                          ) : (
                            <ChevronRight className="size-3.5" />
                          )}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="py-3 font-medium">{row.name}</TableCell>
                    <TableCell className="py-3">{row.database}</TableCell>
                    <TableCell className="py-3">{row.type}</TableCell>
                    <TableCell className="py-3 text-xs font-mono">{row.hash}</TableCell>
                    <TableCell className="py-3 text-muted-foreground text-xs">{row.pullRequest || "\u2014"}</TableCell>
                    <TableCell className="py-3 text-xs whitespace-nowrap">{row.createdAt}</TableCell>
                    <TableCell className="py-3 text-xs whitespace-nowrap">{row.updatedAt}</TableCell>
                    <TableCell className="py-3 text-xs">{row.deployedAt}</TableCell>
                    <TableCell className="py-3 text-center" onClick={(e) => e.stopPropagation()}>
                      {isRemoved ? (
                        <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700 gap-1">
                          <Plus className="size-3" /> Restore
                        </Button>
                      ) : (
                        <Button size="sm" variant="destructive" className="h-7 w-7 p-0">
                          <Trash className="size-3.5" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>,
                ];
                if (isExpanded && row.fileNames.length > 0) {
                  rows.push(
                    <TableRow key={`${rowKey}-files`} className="bg-muted/30">
                      <TableCell colSpan={10} className="px-8 py-3">
                        <div className="flex flex-col gap-1">
                          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Files
                          </span>
                          {row.fileNames.map((file) => (
                            <span key={file} className="text-sm font-mono text-muted-foreground">
                              {file}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>,
                  );
                }
                return rows;
              })
            ) : (
              <TableRow>
                <TableCell colSpan={10} className="h-24 text-center text-muted-foreground">
                  No database scripts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
