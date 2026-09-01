import type { ColumnDef } from "@tanstack/react-table";
import { format, isToday, isYesterday } from "date-fns";
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Release } from "@/types/release";
import { StatusBadge } from "./status-badge";

function relativeDate(dateStr: string | null): { date: string; label: string } | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  const formatted = format(d, "MMM d, yyyy");
  if (isToday(d)) return { date: formatted, label: "Today" };
  if (isYesterday(d)) return { date: formatted, label: "Yesterday" };
  const diff = Math.round((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (diff > 0) return { date: formatted, label: `in ${diff}d` };
  if (diff < 0) return { date: formatted, label: `${Math.abs(diff)}d ago` };
  return { date: formatted, label: "Today" };
}

function TimestampCell({ date }: { date: string | null }) {
  const rel = relativeDate(date);
  if (!rel) return <span className="text-sm text-muted-foreground">—</span>;
  return (
    <div className="flex flex-col">
      <span className="text-sm">{rel.date}</span>
      <span className="text-xs text-muted-foreground">{rel.label}</span>
    </div>
  );
}

function sortableHeader(label: string): ColumnDef<Release>["header"] {
  return ({ header }) => {
    const sorted = header.column.getIsSorted();
    return (
      <span className="flex items-center gap-1 text-xs font-medium">
        {label}
        {sorted === "asc" ? (
          <ArrowUpIcon className="size-3" />
        ) : sorted === "desc" ? (
          <ArrowDownIcon className="size-3" />
        ) : (
          <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
        )}
      </span>
    );
  };
}

export function createColumns(onEdit?: (release: Release) => void): ColumnDef<Release>[] {
  return [
    {
      accessorKey: "name",
      header: sortableHeader("Release"),
      cell: ({ row }) => {
        const release = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{release.name}</span>
            <span className="text-xs text-muted-foreground font-mono">{release.id}</span>
          </div>
        );
      },
      sortingFn: (a, b) => a.original.name.localeCompare(b.original.name),
    },
    {
      id: "project",
      header: sortableHeader("Project"),
      cell: ({ row }) => (
        <span className="text-sm">{row.original.projectName ?? "—"}</span>
      ),
      sortingFn: (a, b) =>
        (a.original.projectName ?? "").localeCompare(b.original.projectName ?? ""),
    },
    {
      id: "kind",
      header: sortableHeader("Kind"),
      cell: ({ row }) => (
        <span className="text-sm text-muted-foreground">
          {row.original.kind ? row.original.kind.replace(/_/g, " ") : "—"}
        </span>
      ),
      sortingFn: (a, b) => (a.original.kind ?? "").localeCompare(b.original.kind ?? ""),
    },
    {
      accessorKey: "createdAt",
      header: sortableHeader("Created"),
      cell: ({ row }) => <TimestampCell date={row.original.createdAt} />,
      sortingFn: (a, b) =>
        new Date(a.original.createdAt).getTime() - new Date(b.original.createdAt).getTime(),
    },
    {
      id: "publishedAt",
      header: sortableHeader("Published"),
      cell: ({ row }) => <TimestampCell date={row.original.publishedAt} />,
      sortingFn: (a, b) =>
        new Date(a.original.publishedAt ?? 0).getTime() -
        new Date(b.original.publishedAt ?? 0).getTime(),
    },
    {
      accessorKey: "status",
      header: sortableHeader("Status"),
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      id: "actions",
      enableSorting: false,
      header: () => <div className="w-8" />,
      cell: ({ row }) => (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {row.original.status === "draft" && (
                <DropdownMenuItem onSelect={() => onEdit?.(row.original)}>
                  Edit release
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];
}
