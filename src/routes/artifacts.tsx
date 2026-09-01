import { createFileRoute,
  Outlet,
} from "@tanstack/react-router";

function ArtifactsRoute() {
  return <Outlet />;
}

export const Route = createFileRoute("/artifacts")({

  component: ArtifactsRoute,
});
