import { useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  GitBranchIcon,
  WebhookIcon,
  ZapIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
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
import type { Job, JobStatus } from "../api/types";
import { BuildStatusBadge, BuildStatusDot, formatDuration } from "./BuildStatusBadge";

interface JobListTableProps {
  data: Job[] | undefined;
  isLoading: boolean;
  error: Error | null;
  statusFilter: JobStatus | "all";
  searchQuery: string;
}

const columnHelper = createColumnHelper<Job>();

function SortHeader({
  header,
  label,
}: {
  header: { column: { getIsSorted: () => string | false } };
  label: string;
}) {
  const sorted = header.column.getIsSorted();
  return (
    <span className="flex items-center gap-1">
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
}

export function JobListTable({
  data,
  isLoading,
  error,
  statusFilter,
  searchQuery,
}: JobListTableProps) {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([{ id: "name", desc: false }]);

  const filtered = useMemo(() => {
    if (!data) return [];
    let result = data;
    if (statusFilter !== "all") {
      result = result.filter((j) => j.status === statusFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (j) =>
          j.name.toLowerCase().includes(q) ||
          (j.description ?? "").toLowerCase().includes(q) ||
          j.branch.toLowerCase().includes(q),
      );
    }
    return result;
  }, [data, statusFilter, searchQuery]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("status", {
        header: "",
        id: "accent",
        enableSorting: false,
        cell: ({ getValue }) => <BuildStatusDot status={getValue()} />,
      }),
      columnHelper.accessor("name", {
        header: ({ header }) => <SortHeader header={header} label="Job" />,
        cell: ({ row }) => (
          <div>
            <span className="font-medium text-foreground">{row.original.name}</span>
            {row.original.description && (
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                {row.original.description}
              </p>
            )}
          </div>
        ),
      }),
      columnHelper.accessor("status", {
        header: ({ header }) => <SortHeader header={header} label="Status" />,
        cell: ({ getValue }) => <BuildStatusBadge status={getValue()} />,
      }),
      columnHelper.accessor("lastDuration", {
        header: ({ header }) => <SortHeader header={header} label="Duration" />,
        cell: ({ getValue }) => (
          <span className="font-mono text-xs text-muted-foreground">
            {formatDuration(getValue())}
          </span>
        ),
      }),
      columnHelper.accessor("branch", {
        header: ({ header }) => <SortHeader header={header} label="Branch" />,
        cell: ({ getValue }) => (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <GitBranchIcon className="size-3" />
            {getValue()}
          </span>
        ),
      }),
      columnHelper.accessor("trigger", {
        header: ({ header }) => <SortHeader header={header} label="Trigger" />,
        cell: ({ getValue }) => {
          const Icon =
            getValue() === "manual"
              ? ZapIcon
              : getValue() === "scheduled"
                ? CalendarIcon
                : WebhookIcon;
          return (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground capitalize">
              <Icon className="size-3" />
              {getValue()}
            </span>
          );
        },
      }),
    ],
    [],
  );

  const table = useReactTable({
    data: filtered,
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
        <p className="font-medium">Failed to load jobs</p>
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

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg font-medium text-foreground">No jobs found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {searchQuery || statusFilter !== "all"
            ? "Try adjusting your search or filter."
            : "Create a new job to get started."}
        </p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={cn(
                  header.column.getCanSort() && "cursor-pointer select-none hover:text-foreground",
                  header.column.id === "accent" && "w-2 p-0",
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
            onClick={() => navigate({ to: "/builds/$jobId", params: { jobId: row.original.id } })}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className={cn(cell.column.id === "accent" && "p-0 w-2")}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
