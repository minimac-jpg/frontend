"use client";

import { Trash2 } from "lucide-react";
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

export function DangerSection() {
  return (
    <section className="rounded-xl border border-red-200 bg-card shadow-sm dark:border-red-900/50">
      <div className="px-6 py-4 border-b border-red-200 dark:border-red-900/50">
        <h2 className="text-base font-semibold text-red-600 dark:text-red-400">Danger Zone</h2>
        <p className="text-sm text-muted-foreground mt-0.5">Irreversible account actions</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-red-200 dark:border-red-900/50 p-4">
          <div>
            <p className="text-sm font-medium text-red-600 dark:text-red-400">Delete Account</p>
            <p className="text-xs text-muted-foreground">
              Permanently delete your account and all associated data
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950"
              >
                <Trash2 className="size-4" />
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. All your projects, builds, and data will be
                  permanently removed.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="confirm-delete">
                  Type <span className="font-semibold">delete my account</span> to confirm
                </label>
                <Input id="confirm-delete" placeholder="delete my account" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Trash2 className="size-4" />
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
