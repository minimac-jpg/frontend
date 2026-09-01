import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { errorToMessage, toast, Toaster } from "@/components/ui/toast";
import { useAuthStore } from "@/state/auth-store";
import { authClient } from "@/lib/auth-client";

interface InviteSearch {
  redirect?: string;
}

function InviteRoute() {
  const { invitationId } = Route.useParams();
  const { isAuthenticated } = useAuthStore();
  const [status, setStatus] = useState<"pending" | "accepted" | "error">(
    "pending",
  );
  const [message, setMessage] = useState<string | null>(null);
  const attempted = useRef(false);

  useEffect(() => {
    if (!isAuthenticated || attempted.current) return;
    attempted.current = true;
    (async () => {
      try {
        const { data, error } = await authClient.organization.acceptInvitation({
          invitationId,
        });
        if (error) throw error;
        const organizationId = data?.member?.organizationId;
        if (organizationId) {
          const setActive = await authClient.organization.setActive({
            organizationId,
          });
          if (setActive.error) throw setActive.error;
        }
        setStatus("accepted");
        toast.success("Invitation accepted");
      } catch (err) {
        setStatus("error");
        setMessage(errorToMessage(err));
      }
    })();
  }, [isAuthenticated, invitationId]);

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-muted p-6">
        <h1 className="text-xl font-semibold">Sign in to accept invitation</h1>
        <p className="max-w-sm text-center text-sm text-muted-foreground">
          You need to sign in with the invited email address before accepting
          this invitation.
        </p>
        <Button asChild>
          <Link
            to="/login"
            search={{ redirect: `/invite/${invitationId}` }}
          >
            Sign in
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-muted p-6">
      <Toaster />
      {status === "pending" && (
        <>
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Accepting invitation…</p>
        </>
      )}
      {status === "accepted" && (
        <>
          <CheckCircle2 className="size-8 text-green-600" />
          <h1 className="text-xl font-semibold">Invitation accepted</h1>
          <p className="text-sm text-muted-foreground">
            You've joined the organization.
          </p>
          <Button asChild>
            <Link to="/settings/organization">
              Go to organization settings
            </Link>
          </Button>
        </>
      )}
      {status === "error" && (
        <>
          <XCircle className="size-8 text-destructive" />
          <h1 className="text-xl font-semibold">Invitation failed</h1>
          <p className="max-w-sm text-center text-sm text-muted-foreground">
            {message ??
              "This invitation may have expired, been canceled, or was issued for a different email address."}
          </p>
          <Button asChild>
            <Link to="/">Back to dashboard</Link>
          </Button>
        </>
      )}
    </div>
  );
}

export const Route = createFileRoute("/invite/$invitationId")({
  validateSearch: (search: Record<string, unknown>): InviteSearch => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  component: InviteRoute,
});
