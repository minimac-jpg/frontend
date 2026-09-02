import { useMatches, useNavigate, useRouterState } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import { useAuthStore } from "../../state/auth-store";

interface RequireAuthProps {
  children: ReactNode;
}

const PUBLIC_PATHS = ["/login"];

export function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated, isPending } = useAuthStore();
  const navigate = useNavigate();
  const matches = useMatches();
  const redirectSearch = useRouterState({
    select: (state) => state.location.search,
  }) as { redirect?: string };

  const isPublicPath = matches.some((m) => PUBLIC_PATHS.includes(m.pathname));
  const redirectTo =
    typeof redirectSearch?.redirect === "string" &&
    redirectSearch.redirect.startsWith("/") &&
    !redirectSearch.redirect.startsWith("//")
      ? redirectSearch.redirect
      : "/";

  useEffect(() => {
    if (isPending) return;
    if (!isAuthenticated && !isPublicPath) {
      navigate({ to: "/login", replace: true });
    }
    if (isAuthenticated && isPublicPath) {
      navigate({ to: redirectTo, replace: true });
    }
  }, [isPending, isAuthenticated, isPublicPath, redirectTo, navigate]);

  if (isPending && !isPublicPath) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!isAuthenticated && !isPublicPath) {
    return null;
  }

  return <>{children}</>;
}
