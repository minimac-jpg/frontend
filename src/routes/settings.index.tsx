import { createFileRoute } from "@tanstack/react-router";

import { SettingsPage } from "../components/settings/settings-page";

function SettingsIndexRoute() {
  return <SettingsPage />;
}

export const Route = createFileRoute("/settings/")({
  component: SettingsIndexRoute,
});
