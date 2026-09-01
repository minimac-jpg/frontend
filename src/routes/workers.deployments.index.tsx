import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { useDeployments } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { Deployment } from "@/features/console/api/types";

const columns: ColumnDef<Deployment>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  { accessorKey: "spec.replicas", header: "Desired" },
  { accessorKey: "status.readyReplicas", header: "Ready", cell: (info) => (info.getValue() as number | undefined) ?? 0 },
  { accessorKey: "status.availableReplicas", header: "Available", cell: (info) => (info.getValue() as number | undefined) ?? 0 },
];

function WorkersDeploymentsRoute() {
  const { data, isLoading } = useDeployments();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Deployments</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage application deployments
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/deployments/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/deployments/")({

  component: WorkersDeploymentsRoute,
});
