import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { useProject } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";

function WorkersProjectDetailRoute() {
  const { projectName } = useParams({ from: "/workers/projects/$projectName" });
  const { data, isLoading } = useProject(projectName);

  return (
    <ResourceDetailLayout
      title="Project"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/projects"
    />
  );
}

export const Route = createFileRoute("/workers/projects/$projectName")({

  component: WorkersProjectDetailRoute,
});
