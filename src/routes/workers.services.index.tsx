import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { useServices } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { Service } from "@/features/console/api/types";

const columns: ColumnDef<Service>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  { accessorKey: "spec.type", header: "Type" },
  { accessorKey: "spec.clusterIP", header: "Cluster IP", cell: (info) => (info.getValue() as string | undefined) ?? "-" },
  {
    id: "ports",
    header: "Ports",
    accessorFn: (row) => row.spec.ports,
    cell: (info) => (info.getValue() as Service["spec"]["ports"]).map((p) => `${p.port}/${p.protocol}`).join(", "),
  },
];

function WorkersServicesRoute() {
  const { data, isLoading } = useServices();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Services</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage internal service discovery
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/services/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/services/")({

  component: WorkersServicesRoute,
});
