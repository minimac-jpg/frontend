import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { ArtifactDetailPanel } from "../features/artifacts/components/ArtifactDetailPanel";

function ArtifactDetailRoute() {
  const { componentId } = useParams({ from: "/artifacts/$componentId" });
  return <ArtifactDetailPanel componentId={componentId} />;
}

export const Route = createFileRoute("/artifacts/$componentId")({

  component: ArtifactDetailRoute,
});
