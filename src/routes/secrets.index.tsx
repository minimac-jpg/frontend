import { createFileRoute } from "@tanstack/react-router";

import { Eye, EyeOff, FolderClosed, Pencil, Plus, Search, Star, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { LoadingState } from "@/components/common/loading-state";
import { SecretCreateForm } from "@/components/secrets/secret-create-form";
import { SecretEditForm } from "@/components/secrets/secret-edit-form";
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
import { useDeleteSecret, useSecrets } from "@/hooks/use-secrets";
import type { Secret } from "@/types/secret";


type GroupFilter =
  | { type: "all" }
  | { type: "favorites" }
  | { type: "folder"; value: string }
  | { type: "project"; value: string };

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  disabled: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

const statusLabels: Record<string, string> = {
  active: "Active",
  disabled: "Inactive",
};

function SecretsRoute() {
  const { data, isLoading, error } = useSecrets();
  const { mutateAsync: deleteSecret, isPending: isDeleting } = useDeleteSecret();

  const [showCreate, setShowCreate] = useState(false);
  const [editingSecret, setEditingSecret] = useState<Secret | null>(null);
  const [deletingSecret, setDeletingSecret] = useState<Secret | null>(null);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState<GroupFilter>({ type: "all" });
  const [showValue, setShowValue] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleShowValue = (id: string) => {
    setShowValue((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const secrets = data?.items ?? [];

  const folders = useMemo(() => {
    const set = new Set<string>();
    secrets.forEach((s) => {
      if (s.folder) set.add(s.folder);
    });
    return Array.from(set).sort();
  }, [secrets]);

  const projects = useMemo(() => {
    const set = new Set<string>();
    secrets.forEach((s) => {
      if (s.project) set.add(s.project);
    });
    return Array.from(set).sort();
  }, [secrets]);

  const filtered = useMemo(() => {
    let result = secrets;

    // group filter
    if (group.type === "favorites") {
      result = result.filter((s) => favorites.has(s.id));
    } else if (group.type === "folder") {
      result = result.filter((s) => s.folder === group.value);
    } else if (group.type === "project") {
      result = result.filter((s) => s.project === group.value);
    }

    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          (s.folder?.toLowerCase() ?? "").includes(q) ||
          (s.project?.toLowerCase() ?? "").includes(q),
      );
    }

    return result;
  }, [secrets, group, search, favorites]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Secrets</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage secrets for your CI/CD pipelines
          </p>
        </div>
        <LoadingState message="Loading secrets..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Secrets</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage secrets for your CI/CD pipelines
          </p>
        </div>
        <ErrorState message="Failed to load secrets" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Secrets</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage secrets for your CI/CD pipelines
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search secrets..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Dialog open={showCreate} onOpenChange={setShowCreate}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4" />
              Create Secret
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Secret</DialogTitle>
              <DialogDescription>Add a new secret to your CI/CD pipelines.</DialogDescription>
            </DialogHeader>
            <SecretCreateForm
              folders={folders}
              projects={projects}
              onSuccess={() => setShowCreate(false)}
              onCancel={() => setShowCreate(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-6">
        <aside className="hidden w-52 shrink-0 lg:block">
          <nav className="space-y-1">
            <button
              onClick={() => setGroup({ type: "all" })}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "all" ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`}
            >
              All Secrets
              <span className="ml-auto text-xs text-muted-foreground">{secrets.length}</span>
            </button>
            <button
              onClick={() => setGroup({ type: "favorites" })}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "favorites" ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`}
            >
              <Star className="size-4" />
              Favorites
              <span className="ml-auto text-xs text-muted-foreground">{favorites.size}</span>
            </button>

            {folders.length > 0 && (
              <div className="pt-3">
                <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Folders
                </p>
                {folders.map((f) => (
                  <button
                    key={f}
                    onClick={() => setGroup({ type: "folder", value: f })}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "folder" && group.value === f ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`}
                  >
                    <FolderClosed className="size-4" />
                    {f}
                    <span className="ml-auto text-xs text-muted-foreground">
                      {secrets.filter((s) => s.folder === f).length}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {projects.length > 0 && (
              <div className="pt-3">
                <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Projects
                </p>
                {projects.map((p) => (
                  <button
                    key={p}
                    onClick={() => setGroup({ type: "project", value: p })}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${group.type === "project" && group.value === p ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-gray-200/90 hover:text-foreground"}`}
                  >
                    <FolderClosed className="size-4" />
                    {p}
                    <span className="ml-auto text-xs text-muted-foreground">
                      {secrets.filter((s) => s.project === p).length}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          {filtered.length === 0 ? (
            <EmptyState
              title={search ? "No matching secrets" : "No secrets"}
              description={
                search
                  ? "Try a different search term or clear the filter."
                  : "Create your first secret to get started."
              }
              action={
                !search ? (
                  <Button onClick={() => setShowCreate(true)}>
                    <Plus className="size-4" />
                    Create Secret
                  </Button>
                ) : undefined
              }
            />
          ) : (
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30 text-left text-xs font-medium text-muted-foreground">
                    <th className="w-8 px-4 py-3" />
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Value</th>
                    <th className="px-4 py-3">Folder</th>
                    <th className="px-4 py-3">Project</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="w-24 px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((secret) => (
                    <tr key={secret.id} className="border-b last:border-0 hover:bg-gray-200/90">
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleFavorite(secret.id)}
                          className="text-muted-foreground hover:text-amber-500"
                        >
                          <Star
                            className={`size-4 ${favorites.has(secret.id) ? "fill-amber-500 text-amber-500" : ""}`}
                          />
                        </button>
                      </td>
                      <td className="px-4 py-3 font-medium">{secret.name}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <code className="rounded bg-muted px-2 py-0.5 font-mono text-xs">
                            {showValue.has(secret.id) ? (secret.value ?? "—") : "•".repeat(24)}
                          </code>
                          <button
                            onClick={() => toggleShowValue(secret.id)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {showValue.has(secret.id) ? (
                              <EyeOff className="size-3.5" />
                            ) : (
                              <Eye className="size-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{secret.folder ?? "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">{secret.project ?? "—"}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${statusColors[secret.status] ?? statusColors.disabled}`}
                        >
                          {statusLabels[secret.status] ?? secret.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon-xs"
                                onClick={() => setEditingSecret(secret)}
                              >
                                <Pencil className="size-3.5" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Secret</DialogTitle>
                                <DialogDescription>Update {secret.name}.</DialogDescription>
                              </DialogHeader>
                              {editingSecret?.id === secret.id && (
                                <SecretEditForm
                                  secret={editingSecret}
                                  folders={folders}
                                  projects={projects}
                                  onSuccess={() => setEditingSecret(null)}
                                />
                              )}
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon-xs"
                                className="text-destructive hover:text-destructive"
                                onClick={() => setDeletingSecret(secret)}
                              >
                                <Trash2 className="size-3.5" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Delete Secret</DialogTitle>
                                <DialogDescription>
                                  Permanently delete{" "}
                                  <span className="font-medium text-foreground">
                                    {deletingSecret?.name}
                                  </span>
                                  ? This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  disabled={isDeleting}
                                  onClick={async () => {
                                    if (!deletingSecret) return;
                                    await deleteSecret(deletingSecret.id);
                                    setDeletingSecret(null);
                                  }}
                                >
                                  {isDeleting ? "Deleting..." : "Delete"}
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/secrets/")({

  component: SecretsRoute,
});
