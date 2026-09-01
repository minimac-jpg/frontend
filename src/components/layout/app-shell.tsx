import type { ReactNode } from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { NavUser } from "@/components/navigation/nav-user";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "@/state/auth-store";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
const { user, isAuthenticated } = useAuthStore();

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center justify-end gap-2 border-b px-4">
          {isAuthenticated && user && <NavUser user={user} />}
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
