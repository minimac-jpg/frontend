"use client";

import { KeyRound } from "lucide-react";
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

export function AccountSection() {
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
            <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <KeyRound className="size-4" />
                Reset Password
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reset Password</DialogTitle>
                <DialogDescription>
                  Enter your current password and a new password.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="current-pw">
                    Current Password
                  </label>
                  <Input id="current-pw" type="password" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="new-pw">
                    New Password
                  </label>
                  <Input id="new-pw" type="password" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="confirm-pw">
                    Confirm Password
                  </label>
                  <Input id="confirm-pw" type="password" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Update Password</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
