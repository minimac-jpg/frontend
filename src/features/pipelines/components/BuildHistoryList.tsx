import { useNavigate } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon, UserIcon } from "lucide-react";
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
import type { Build } from "../api/types";
import { BuildStatusBadge, BuildStatusDot, formatDuration } from "./BuildStatusBadge";

interface BuildHistoryListProps {
  builds: Build[] | undefined;
  isLoading: boolean;
  error: Error | null;
  jobId: string;
}

const columnHelper = createColumnHelper<Build>();

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

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function BuildHistoryList({ builds, isLoading, error, jobId }: BuildHistoryListProps) {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([{ id: "number", desc: true }]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("status", {
        header: "",
        id: "accent",
        enableSorting: false,
        cell: ({ getValue }) => <BuildStatusDot status={getValue()} />,
      }),
      columnHelper.accessor("number", {
        header: ({ header }) => <SortHeader header={header} label="#" />,
        cell: ({ getValue }) => (
          <span className="font-mono text-xs text-muted-foreground">#{getValue()}</span>
        ),
      }),
      columnHelper.accessor("status", {
        header: ({ header }) => <SortHeader header={header} label="Status" />,
        cell: ({ getValue }) => <BuildStatusBadge status={getValue()} />,
      }),
      columnHelper.accessor("commitMessage", {
        header: ({ header }) => <SortHeader header={header} label="Commit" />,
        cell: ({ row }) => (
          <div className="min-w-0">
            <span className="text-xs text-foreground">{row.original.commitMessage}</span>
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">
              {row.original.commitHash.slice(0, 7)}
            </span>
          </div>
        ),
      }),
      columnHelper.accessor("triggeredBy", {
        header: ({ header }) => <SortHeader header={header} label="Triggered by" />,
        cell: ({ getValue }) => (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <UserIcon className="size-3" />
            {getValue()}
          </span>
        ),
      }),
      columnHelper.accessor("duration", {
        header: ({ header }) => <SortHeader header={header} label="Duration" />,
        cell: ({ getValue }) => (
          <span className="font-mono text-xs text-muted-foreground">
            {formatDuration(getValue())}
          </span>
        ),
      }),
      columnHelper.accessor("createdAt", {
        header: ({ header }) => <SortHeader header={header} label="Started" />,
        cell: ({ getValue }) => (
          <span className="text-xs text-muted-foreground">{formatDate(getValue())}</span>
        ),
      }),
    ],
    [],
  );

  const table = useReactTable({
    data: builds ?? [],
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
        <p className="font-medium">Failed to load builds</p>
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
      </div>
    );
  }

  if (!builds || builds.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg font-medium text-foreground">No builds yet</p>
        <p className="mt-1 text-sm text-muted-foreground">Trigger a build to see results here.</p>
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
            onClick={() =>
              navigate({
                to: "/builds/$jobId/builds/$buildId",
                params: { jobId, buildId: row.original.id },
              })
            }
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
