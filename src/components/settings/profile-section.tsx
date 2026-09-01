"use client";

import { Camera, Check, Code, Mail, User } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function ProfileSection() {
  const [displayName, setDisplayName] = useState("Alex Morgan");

  return (
    <>
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="px-6 py-4 border-b">
          <h2 className="text-base font-semibold">Profile</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Your public profile information</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="size-16">
                <AvatarImage src="" alt="Avatar" />
                <AvatarFallback className="text-base bg-muted">
                  <User className="size-6 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <button
                type="button"
                className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full border bg-background shadow-sm hover:bg-gray-200/90 transition-colors"
              >
                <Camera className="size-3" />
              </button>
            </div>
            <div>
              <p className="text-sm font-medium">{displayName}</p>
              <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max 2MB.</p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="display-name">
                Display Name
              </label>
              <Input
                id="display-name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" value="alex@example.com" readOnly className="bg-muted/50" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>
              <Check className="size-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border bg-card shadow-sm">
        <div className="px-6 py-4 border-b">
          <h2 className="text-base font-semibold">Connected Accounts</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Link your accounts for single sign-on
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <Code className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-xs text-muted-foreground">alexmorgan</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Connected
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Google</p>
                <p className="text-xs text-muted-foreground">Not connected</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Connect
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
