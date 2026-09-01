import { createFileRoute } from "@tanstack/react-router";

import { Flower } from "lucide-react";
import { LoginForm } from "../components/auth/login-form";

interface LoginSearch {
  redirect?: string;
}

function LoginRoute() {
  const { redirect } = Route.useSearch();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Flower className="size-4" />
          </div>
          Maple
        </div>
        <LoginForm redirectTo={redirect} />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): LoginSearch => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  component: LoginRoute,
});
