"use client";

import {
  Building2,
  Check,
  ChevronsUpDown,
  Loader2,
  Plus,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toast";
import { useWorkspace } from "@/hooks/use-workspace";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function initials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0];
  const last = parts.length > 1 ? parts[parts.length - 1] : undefined;
  const result = `${first?.[0] ?? ""}${last?.[0] ?? ""}`;
  return result.length > 0 ? result.toUpperCase() : "?";
}

export function WorkspaceSwitcher() {
  const {
    user,
    activeOrganization,
    isPersonal,
    personalWorkspace,
    workspaces,
    isLoading,
    setActiveOrganization,
    createOrganization,
  } = useWorkspace();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [switchingId, setSwitchingId] = useState<string | null>(null);

  const activeName = isPersonal
    ? (personalWorkspace?.name ?? "Personal")
    : activeOrganization?.name;
  const activeSubtitle = isPersonal
    ? "Personal workspace"
    : `@${activeOrganization?.slug ?? ""}`;

  const handleSelect = async (organizationId: string | null) => {
    try {
      setSwitchingId(organizationId);
      await setActiveOrganization(organizationId);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to switch workspace");
    } finally {
      setSwitchingId(null);
    }
  };

  const handleCreate = async () => {
    if (!name.trim()) return;
    const finalSlug = slug.trim() || slugify(name);
    if (!finalSlug) {
      toast.error("Could not generate a slug — enter one manually");
      return;
    }
    try {
      setSubmitting(true);
      await createOrganization({ name: name.trim(), slug: finalSlug });
      toast.success(`Workspace "${name.trim()}" created`);
      setDialogOpen(false);
      setName("");
      setSlug("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create workspace");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg p-1 text-left text-sm outline-none hover:bg-gray-200/90 focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex aspect-square size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              {isPersonal ? (
                <UserRound className="size-4" />
              ) : (
                <span className="text-xs font-semibold">
                  {initials(activeName ?? "?")}
                </span>
              )}
            </span>
            <span className="grid flex-1 min-w-0 text-left text-sm leading-tight max-md:hidden">
              <span className="truncate font-medium">{activeName}</span>
              <span className="truncate text-xs text-muted-foreground">
                {activeSubtitle}
              </span>
            </span>
            {isLoading || switchingId !== null ? (
              <Loader2 className="ml-auto size-4 shrink-0 animate-spin text-muted-foreground max-md:hidden" />
            ) : (
              <ChevronsUpDown className="ml-auto size-4 shrink-0 text-muted-foreground max-md:hidden" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 rounded-lg" align="start" sideOffset={4}>
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Workspaces
          </DropdownMenuLabel>
          {personalWorkspace && (
            <DropdownMenuItem
              onClick={() => handleSelect(null)}
              className="gap-2"
              disabled={switchingId !== null}
            >
              <UserRound className="size-4 shrink-0" />
              <span className="grid flex-1 min-w-0 text-left leading-tight">
                <span className="truncate">Personal — {personalWorkspace.name}</span>
                {user?.email && (
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                )}
              </span>
              {isPersonal && <Check className="size-4 shrink-0" />}
            </DropdownMenuItem>
          )}
          {workspaces.length > 0 && <DropdownMenuSeparator />}
          {workspaces.map((workspace) => (
            <DropdownMenuItem
              key={workspace.id}
              onClick={() => handleSelect(workspace.id)}
              className="gap-2"
              disabled={switchingId !== null}
            >
              <Building2 className="size-4 shrink-0" />
              <span className="grid flex-1 min-w-0 text-left leading-tight">
                <span className="truncate">{workspace.name}</span>
                {workspace.slug && (
                  <span className="truncate text-xs text-muted-foreground">
                    @{workspace.slug}
                  </span>
                )}
              </span>
              {!isPersonal && activeOrganization?.id === workspace.id && (
                <Check className="size-4 shrink-0" />
              )}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setDialogOpen(true)} className="gap-2">
            <Plus className="size-4 shrink-0" />
            Create organization
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create organization</DialogTitle>
            <DialogDescription>
              Create a shared workspace for your team. The slug is used in
              invitation links and URLs.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="org-name-input">Name</Label>
              <Input
                id="org-name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Acme Inc"
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="org-slug-input">Slug (optional)</Label>
              <Input
                id="org-slug-input"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder={name ? slugify(name) : "acme-inc"}
                disabled={submitting}
              />
              <p className="text-xs text-muted-foreground">
                Auto-generated from the name if left blank.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button onClick={handleCreate} disabled={submitting || !name.trim()}>
              {submitting && <Loader2 className="size-4 animate-spin" />}
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
