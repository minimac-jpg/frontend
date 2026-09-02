"use client";

import { KeyRound, Loader2 } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";

function useLastPasswordChange() {
  const [lastChanged, setLastChanged] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    authClient
      .listAccounts()
      .then(({ data, error }) => {
        if (cancelled || error || !data) return;
        const credentialAccount = data.find((a) => a.providerId === "credential");
        if (credentialAccount?.updatedAt) {
          setLastChanged(
            new Date(credentialAccount.updatedAt).toLocaleDateString(undefined, {
              dateStyle: "medium",
            }),
          );
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return lastChanged;
}

function ChangePasswordDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setValidationError(null);
    setServerError(null);
    setSuccess(false);
    setIsSubmitting(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setServerError(null);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setValidationError("All fields are required");
      return;
    }
    if (newPassword.length < 8) {
      setValidationError("New password must be at least 8 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setValidationError("New passwords do not match");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: true,
      });
      if (error) {
        setServerError(error.message ?? "Failed to update password");
        return;
      }
      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setServerError("Failed to update password");
    } finally {
      setIsSubmitting(false);
    }
  };

  const error = validationError ?? serverError;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <KeyRound className="size-4" />
          Change Password
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Enter your current password and a new password. You will stay signed in here; other
            devices will be signed out.
          </DialogDescription>
        </DialogHeader>
        {success ? (
          <div className="flex flex-col gap-4">
            <div
              className="rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700"
              role="status"
            >
              Password updated. Other devices have been signed out.
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Done</Button>
              </DialogClose>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-4">
              {error && (
                <div
                  className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                  role="alert"
                >
                  {error}
                </div>
              )}
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="current-pw">
                  Current Password
                </label>
                <Input
                  id="current-pw"
                  type="password"
                  autoComplete="current-password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="new-pw">
                  New Password
                </label>
                <Input
                  id="new-pw"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="confirm-pw">
                  Confirm Password
                </label>
                <Input
                  id="confirm-pw"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline" disabled={isSubmitting}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                Update Password
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function AccountSection() {
  const lastChanged = useLastPasswordChange();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="rounded-xl border bg-card shadow-sm">
      <div className="px-6 py-4 border-b">
        <h2 className="text-base font-semibold">Account Security</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage your password and authentication
        </p>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Password</p>
            <p className="text-xs text-muted-foreground">
              {lastChanged ? `Last changed ${lastChanged}` : "Last changed —"}
            </p>
          </div>
          <ChangePasswordDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Two-factor Authentication</p>
            <p className="text-xs text-muted-foreground">
              Add an extra layer of security to your account
            </p>
          </div>
          <Button variant="outline" size="sm">
            Enable
          </Button>
        </div>
      </div>
    </section>
  );
}
