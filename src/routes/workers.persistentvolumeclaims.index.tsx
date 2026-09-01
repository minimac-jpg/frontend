import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { usePVCs } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { PersistentVolumeClaim } from "@/features/console/api/types";

const columns: ColumnDef<PersistentVolumeClaim>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  {
    id: "accessModes",
    header: "Access Modes",
    accessorFn: (row) => row.spec.accessModes,
    cell: (info) => (info.getValue() as string[]).join(", "),
  },
  { accessorKey: "spec.resources.requests.storage", header: "Capacity", cell: (info) => (info.getValue() as string | undefined) ?? "-" },
  { accessorKey: "spec.storageClassName", header: "Storage Class", cell: (info) => (info.getValue() as string | undefined) ?? "-" },
];

function WorkersPVCsRoute() {
  const { data, isLoading } = usePVCs();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Persistent Volume Claims</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage storage claims
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/persistentvolumeclaims/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/persistentvolumeclaims/")({

  component: WorkersPVCsRoute,
});
