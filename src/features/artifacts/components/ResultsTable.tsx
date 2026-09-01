import { useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { Component, FormatType } from "../api/types";
import { formatAccentColorMap, formatBadgeColorMap } from "../utils/format-colors";

interface ResultsTableProps {
  data: { results: Component[]; total: number } | undefined;
  isLoading: boolean;
  error: Error | null;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** i;
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i] ?? ""}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const columnHelper = createColumnHelper<Component>();

export function ResultsTable({ data, isLoading, error }: ResultsTableProps) {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([{ id: "name", desc: false }]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("format", {
        header: "",
        id: "accent",
        enableSorting: false,
        cell: ({ getValue }) => (
          <div
            className={cn(
              "h-full min-h-[2.5rem] w-1",
              formatAccentColorMap[getValue() as FormatType],
            )}
          />
        ),
      }),
      columnHelper.accessor("name", {
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1">
              Component
              {sorted === "asc" ? (
                <ArrowUpIcon className="size-3" />
              ) : sorted === "desc" ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
              )}
            </span>
          );
        },
        cell: ({ row }) => (
          <div>
            <span className="text-xs text-muted-foreground">{row.original.group}</span>
            <br />
            <span className="font-mono text-sm font-medium text-foreground">
              {row.original.name}
            </span>
          </div>
        ),
      }),
      columnHelper.accessor("version", {
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1">
              Version
              {sorted === "asc" ? (
                <ArrowUpIcon className="size-3" />
              ) : sorted === "desc" ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
              )}
            </span>
          );
        },
        cell: ({ getValue }) => <span className="font-mono text-xs">{getValue()}</span>,
      }),
      columnHelper.accessor("format", {
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1">
              Format
              {sorted === "asc" ? (
                <ArrowUpIcon className="size-3" />
              ) : sorted === "desc" ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
              )}
            </span>
          );
        },
        cell: ({ getValue }) => (
          <Badge
            variant="outline"
            className={cn("text-xs font-mono", formatBadgeColorMap[getValue() as FormatType])}
          >
            {getValue()}
          </Badge>
        ),
      }),
      columnHelper.accessor("repository", {
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1">
              Repository
              {sorted === "asc" ? (
                <ArrowUpIcon className="size-3" />
              ) : sorted === "desc" ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
              )}
            </span>
          );
        },
        cell: ({ getValue }) => <span className="text-xs text-muted-foreground">{getValue()}</span>,
      }),
      columnHelper.accessor("sizeBytes", {
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1">
              Size
              {sorted === "asc" ? (
                <ArrowUpIcon className="size-3" />
              ) : sorted === "desc" ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
              )}
            </span>
          );
        },
        cell: ({ getValue }) => (
          <span className="text-xs font-mono text-muted-foreground">{formatBytes(getValue())}</span>
        ),
      }),
      columnHelper.accessor("modifiedAt", {
        header: ({ header }) => {
          const sorted = header.column.getIsSorted();
          return (
            <span className="flex items-center gap-1">
              Modified
              {sorted === "asc" ? (
                <ArrowUpIcon className="size-3" />
              ) : sorted === "desc" ? (
                <ArrowDownIcon className="size-3" />
              ) : (
                <ArrowUpDownIcon className="size-3 text-muted-foreground/50" />
              )}
            </span>
          );
        },
        cell: ({ getValue }) => (
          <span className="text-xs text-muted-foreground">{formatDate(getValue())}</span>
        ),
      }),
    ],
    [],
  );

  const table = useReactTable({
    data: data?.results ?? [],
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (error) {
    return (
      <div
        className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
        role="alert"
      >
        <p className="font-medium">Failed to load results</p>
        <p className="mt-1 text-destructive/80">{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
      </div>
    );
  }

  if (!data || data.results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg font-medium text-foreground">No results found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your search query or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        {data.total} result{data.total !== 1 ? "s" : ""}
      </p>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    header.column.getCanSort() &&
                      "cursor-pointer select-none hover:text-foreground",
                    header.column.id === "accent" && "w-1 p-0",
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="cursor-pointer"
              onClick={() =>
                navigate({
                  to: "/artifacts/$componentId",
                  params: { componentId: row.original.id },
                })
              }
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className={cn(cell.column.id === "accent" && "p-0 w-1")}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
