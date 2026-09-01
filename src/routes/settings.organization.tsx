import { createFileRoute } from "@tanstack/react-router";

import { OrganizationSettings } from "../components/settings/organization-settings";

function SettingsOrganizationRoute() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Organization</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage members, roles, and invitations for your workspace
        </p>
      </div>
      <OrganizationSettings />
    </div>
  );
}

export const Route = createFileRoute("/settings/organization")({
  component: SettingsOrganizationRoute,
});
