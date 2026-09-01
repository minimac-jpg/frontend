import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboardIcon,
  BlocksIcon,
  ContainerIcon,
  RocketIcon,
  RouteIcon,
  CableIcon,
  HardDriveIcon,
  BoxIcon,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavGroup {
  label: string;
  items: { label: string; to: string; icon: LucideIcon }[];
}

const navGroups: NavGroup[] = [
  { label: "Home", items: [{ label: "Overview", to: "/workers/overview", icon: LayoutDashboardIcon }] },
  {
    label: "Workloads",
    items: [
      { label: "Projects", to: "/workers/projects", icon: BoxIcon },
      { label: "Pods", to: "/workers/pods", icon: ContainerIcon },
      { label: "Deployments", to: "/workers/deployments", icon: BlocksIcon },
      { label: "Builds", to: "/workers/builds", icon: RocketIcon },
    ],
  },
  {
    label: "Networking",
    items: [
      { label: "Routes", to: "/workers/routes", icon: RouteIcon },
      { label: "Services", to: "/workers/services", icon: CableIcon },
    ],
  },
  {
    label: "Storage",
    items: [{ label: "PersistentVolumeClaims", to: "/workers/persistentvolumeclaims", icon: HardDriveIcon }],
  },
];

export function ConsoleSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex w-56 flex-col border-r bg-sidebar text-sidebar-foreground max-md:hidden">
      <div className="flex-1 overflow-y-auto p-3">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-4">
            <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {group.label}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.to || pathname.startsWith(item.to + "/");
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors",
                        isActive
                          ? "bg-sidebar-active font-medium text-sidebar-active-foreground"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <item.icon className="size-4 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
