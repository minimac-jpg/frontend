export interface NavItem {
  name: string;
  path: string;
  icon?: LucideIcon;
}

import {
  Blocks,
  Code,
  // Folder,
  Home,
  KeyRound,
  type LucideIcon,
  Pickaxe,
  Rocket,
  Settings,
  Shapes,
  // Workflow,
} from "lucide-react";

export const navItems: NavItem[] = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: Code },
  { name: "Releases", path: "/releases", icon: Rocket },
  // { name: "Pipelines", path: "/pipelines", icon: Workflow },
  { name: "Builds", path: "/builds", icon: Pickaxe },
  { name: "Workers", path: "/workers", icon: Blocks },
  { name: "Secrets", path: "/secrets", icon: KeyRound },
  { name: "Artifacts", path: "/artifacts", icon: Shapes },
  // { name: "Cache", path: "/cache", icon: Folder },
  { name: "Settings", path: "/settings", icon: Settings },
];
