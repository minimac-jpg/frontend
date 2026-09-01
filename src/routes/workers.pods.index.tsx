import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { usePods } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { Pod } from "@/features/console/api/types";

const columns: ColumnDef<Pod>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  { accessorKey: "spec.nodeName", header: "Node", cell: (info) => (info.getValue() as string | null) ?? "-" },
  { accessorKey: "status.podIP", header: "Pod IP", cell: (info) => (info.getValue() as string | null) ?? "-" },
];

function WorkersPodsRoute() {
  const { data, isLoading } = usePods();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Pods</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          View running and pending pods
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/pods/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/pods/")({

  component: WorkersPodsRoute,
});
