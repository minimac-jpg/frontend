import { createFileRoute,
  Outlet,
} from "@tanstack/react-router";
import { GitBranch, Package, Calendar } from "lucide-react";
import {
  SidebarLayout,
  type SidebarNavItem,
} from "../components/layout/sidebar-layout";

const releasesNavItems: SidebarNavItem[] = [
  { label: "Releases", to: "/releases", icon: GitBranch },
  { label: "Calendar", to: "/releases/calendar", icon: Calendar },
  { label: "Artifacts", to: "/releases/artifacts", icon: Package },
];

function ReleasesRoute() {
  return (
    <SidebarLayout navItems={releasesNavItems}>
      <Outlet />
    </SidebarLayout>
  );
}

export const Route = createFileRoute("/releases")({

  component: ReleasesRoute,
});
