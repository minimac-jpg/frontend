import { Outlet, createFileRoute } from "@tanstack/react-router";

function SettingsLayoutRoute() {
  return <Outlet />;
}

export const Route = createFileRoute("/settings")({
  component: SettingsLayoutRoute,
});
