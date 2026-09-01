import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { useBuilds } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { Build } from "@/features/console/api/types";

const columns: ColumnDef<Build>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  {
    id: "strategy",
    header: "Strategy",
    accessorFn: (row) => row.spec.strategy.type,
  },
  {
    id: "source",
    header: "Source",
    accessorFn: (row) => row.spec.source.type,
  },
];

function WorkersBuildsRoute() {
  const { data, isLoading } = useBuilds();

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Builds</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monitor and manage builds
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/builds/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/builds/")({

  component: WorkersBuildsRoute,
});
