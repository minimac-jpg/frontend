"use client";

import { Ban, CreditCard, Crown } from "lucide-react";
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

export function BillingSection() {
  return (
    <>
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="px-6 py-4 border-b">
          <h2 className="text-base font-semibold">Plan</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Your current subscription plan</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Crown className="size-5 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-semibold">Pro Plan</p>
                <p className="text-xs text-muted-foreground">
                  $29 / month &middot; Renews on Jul 15, 2026
                </p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Subscription</DialogTitle>
                  <DialogDescription>Choose the plan that fits your needs</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="relative flex flex-col rounded-xl border bg-card p-5 shadow-sm">
                    <div className="mb-4">
                      <p className="text-sm font-semibold">Free</p>
                      <p className="mt-1 text-2xl font-bold">$0</p>
                      <p className="text-xs text-muted-foreground">/month</p>
                    </div>
                    <ul className="mb-6 space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        Up to 3 projects
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />5 builds per
                        day
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />1 concurrent
                        worker
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        7-day history
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full" size="sm" disabled>
                        Current
                      </Button>
                    </div>
                  </div>

                  <div className="relative flex flex-col rounded-xl border-2 border-primary bg-card p-5 shadow-md">
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      Current Plan
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold">Pro</p>
                      <p className="mt-1 text-2xl font-bold">$29</p>
                      <p className="text-xs text-muted-foreground">/month</p>
                    </div>
                    <ul className="mb-6 space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Unlimited projects
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Unlimited builds
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        10 concurrent workers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        90-day history
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Priority support
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <Button className="w-full" size="sm">
                        <Crown className="size-3" />
                        Active
                      </Button>
                    </div>
                  </div>

                  <div className="relative flex flex-col rounded-xl border bg-card p-5 shadow-sm">
                    <div className="mb-4">
                      <p className="text-sm font-semibold">Enterprise</p>
                      <p className="mt-1 text-2xl font-bold">$99</p>
                      <p className="text-xs text-muted-foreground">/month</p>
                    </div>
                    <ul className="mb-6 space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        Everything in Pro
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        Unlimited workers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        Unlimited history
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        SSO & SAML
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                        Dedicated support
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full" size="sm">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Ban className="size-3" />
                    <span>Cancel anytime &mdash; no lock-in contracts</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    <Ban className="size-3" />
                    Cancel Subscription
                  </Button>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="rounded-xl border bg-card shadow-sm">
        <div className="px-6 py-4 border-b">
          <h2 className="text-base font-semibold">Payment Method</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Your default payment method</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <CreditCard className="size-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/2028</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Payment Method</DialogTitle>
                  <DialogDescription>Update your default payment method.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="card-number">
                      Card Number
                    </label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="expiry">
                        Expiry
                      </label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="cvc">
                        CVC
                      </label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
}
