import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { useRoutes } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { Route as ConsoleRoute } from "@/features/console/api/types";

const columns: ColumnDef<ConsoleRoute>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  { accessorKey: "spec.host", header: "Host", cell: (info) => (info.getValue() as string | undefined) ?? "-" },
  { accessorKey: "spec.path", header: "Path", cell: (info) => (info.getValue() as string | undefined) ?? "/" },
  { accessorKey: "spec.to.name", header: "Target Service" },
];

function WorkersRoutesRoute() {
  const { data, isLoading } = useRoutes();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Routes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage inbound traffic routes
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/routes/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/routes/")({

  component: WorkersRoutesRoute,
});
