import { useMatches, useNavigate, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";
import { useAuthStore } from "../../state/auth-store";

interface RequireAuthProps {
  children: ReactNode;
}

const PUBLIC_PATHS = ["/login"];

export function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated } = useAuthStore();
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
    if (!isAuthenticated && !isPublicPath) {
      navigate({ to: "/login", replace: true });
    }
    if (isAuthenticated && isPublicPath) {
      navigate({ to: redirectTo, replace: true });
    }
  }, [isAuthenticated, isPublicPath, redirectTo, navigate]);

  if (!isAuthenticated && !isPublicPath) {
    return null;
  }

  return <>{children}</>;
}
