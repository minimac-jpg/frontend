import { createFileRoute,
  Outlet,
} from "@tanstack/react-router";

function BuildsRoute() {
  return <Outlet />;
}

export const Route = createFileRoute("/builds")({

  component: BuildsRoute,
});
