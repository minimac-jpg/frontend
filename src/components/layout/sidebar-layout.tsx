"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SidebarNavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

interface SidebarLayoutProps {
  navItems: SidebarNavItem[];
  children: ReactNode;
}

export function SidebarLayout({
  navItems,
  children,
}: SidebarLayoutProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const bestMatch = navItems.reduce<SidebarNavItem | undefined>((best, item) => {
    const matches = pathname === item.to || pathname.startsWith(`${item.to}/`);
    if (matches && (!best || item.to.length > best.to.length)) return item;
    return best;
  }, undefined);

  return (
    <div className="flex h-full">
      <div className="flex w-44 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border max-md:hidden">
        <div className="flex-1 overflow-hidden p-2">
          <ul className="flex w-full min-w-0 flex-col gap-1">
            {navItems.map((item) => {
              const isActive = bestMatch === item;
              return (
                <li key={item.to} className="relative">
                  <Link
                    to={item.to}
                    className={cn(
                      "flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground",
                      isActive
                        ? "bg-sidebar-active font-medium text-sidebar-active-foreground hover:bg-sidebar-active hover:text-sidebar-active-foreground"
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
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
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-6">{children}</div>
    </div>
  );
}
