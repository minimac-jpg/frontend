import { createFileRoute } from "@tanstack/react-router";

import { type ColumnDef } from "@tanstack/react-table";
import { useProjects } from "@/features/console/api/queries";
import { ResourceListTable } from "@/features/console/components/ResourceListTable";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";
import type { Project } from "@/features/console/api/types";

const columns: ColumnDef<Project>[] = [
  { accessorKey: "metadata.name", header: "Name", cell: (info) => <span className="font-medium">{info.getValue() as string}</span> },
  { accessorKey: "metadata.namespace", header: "Namespace" },
  { accessorKey: "status.phase", header: "Status", cell: (info) => <ResourceStatusBadge status={info.getValue() as string} /> },
  { accessorKey: "spec.displayName", header: "Display Name" },
];

function WorkersProjectsRoute() {
  const { data, isLoading } = useProjects();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse projects and their resources
        </p>
      </div>
      <ResourceListTable
        data={data}
        isLoading={isLoading}
        columns={columns}
        getDetailUrl={(row) => `/workers/projects/${row.metadata.name}`}
      />
    </div>
  );
}

export const Route = createFileRoute("/workers/projects/")({

  component: WorkersProjectsRoute,
});
