import { useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { useDeleteProject, useUpdateProject } from "../../hooks/use-projects";
import type { Project } from "../../types/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ProjectSettingsFormProps {
  project: Project;
  onSuccess?: () => void;
}

interface PrSetting {
  key: string;
  label: string;
  description: string;
  enabled: boolean;
}

export function ProjectSettingsForm({ project, onSuccess }: ProjectSettingsFormProps) {
  const navigate = useNavigate();
  const { mutateAsync: updateProject, isPending, error } = useUpdateProject();
  const { mutateAsync: deleteProject, isPending: isDeleting } = useDeleteProject();
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description ?? "");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [prSettings, setPrSettings] = useState<PrSetting[]>([
    { key: "merge-commits", label: "Allow merge commits", description: "Enable merging with a merge commit", enabled: true },
    { key: "squash-merging", label: "Allow squash merging", description: "Combine all commits into a single commit when merging", enabled: true },
    { key: "rebase-merging", label: "Allow rebase merging", description: "Rebase commits onto the base branch when merging", enabled: false },
    { key: "update-branches", label: "Always suggest updating pull request branches", description: "Show an option to update the pull request branch if it is out of date", enabled: false },
    { key: "auto-merge", label: "Allow auto-merge", description: "Automatically merge a pull request when all required checks pass", enabled: true },
    { key: "delete-head", label: "Automatically delete head branches", description: "Delete the source branch after a pull request is merged", enabled: false },
  ]);

  const togglePrSetting = (key: string) => {
    setPrSettings((prev) =>
      prev.map((s) => (s.key === key ? { ...s, enabled: !s.enabled } : s)),
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    try {
      await updateProject({
        id: project.id,
        data: { description: description.trim() || undefined },
      });
      onSuccess?.();
    } catch (err) {
      // error captured in mutation error
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProject(project.id);
      navigate({ to: "/projects" });
    } catch (err) {
      // error captured in mutation error
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4">General</h2>
        <form onSubmit={handleSubmit} noValidate className="rounded-xl border bg-card p-6 space-y-5">
          {validationError && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
              {validationError}
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
              {error.message}
            </div>
          )}

          <div className="grid gap-2">
            <label htmlFor="settings-name" className="text-sm font-medium">
              Project name
            </label>
            <Input
              id="settings-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled
            />
            <p className="text-xs text-muted-foreground">
              Project names cannot be changed.
            </p>
          </div>

          <div className="grid gap-2">
            <label htmlFor="settings-description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="settings-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isPending}
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save changes"}
          </Button>
        </form>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4">Pull Requests</h2>
        <div className="rounded-xl border bg-card p-6 space-y-5">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Merge button</h3>
            {prSettings.slice(0, 3).map((setting) => (
              <label
                key={setting.key}
                className="flex items-center justify-between gap-4 rounded-lg border border-transparent hover:bg-gray-200/90  -mx-2 px-2 py-2 cursor-pointer transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{setting.label}</span>
                  <span className="text-xs text-muted-foreground">{setting.description}</span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={setting.enabled}
                  onClick={() => togglePrSetting(setting.key)}
                  className={cn(
                    "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    setting.enabled ? "bg-primary" : "bg-input",
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
                      setting.enabled ? "translate-x-4" : "translate-x-0",
                    )}
                  />
                </button>
              </label>
            ))}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Additional</h3>
            {prSettings.slice(3).map((setting) => (
              <label
                key={setting.key}
                className="flex items-center justify-between gap-4 rounded-lg border border-transparent hover:bg-gray-200/90 -mx-2 px-2 py-2 cursor-pointer transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{setting.label}</span>
                  <span className="text-xs text-muted-foreground">{setting.description}</span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={setting.enabled}
                  onClick={() => togglePrSetting(setting.key)}
                  className={cn(
                    "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    setting.enabled ? "bg-primary" : "bg-input",
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
                      setting.enabled ? "translate-x-4" : "translate-x-0",
                    )}
                  />
                </button>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4 text-destructive">Danger Zone</h2>
        <div className="rounded-xl border border-destructive/20 bg-card p-6 space-y-4">
          <div>
            <h3 className="text-sm font-medium">Delete this project</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Permanently delete this project and all its data. This action cannot be undone.
            </p>
          </div>
          {showDeleteConfirm ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-destructive">Are you sure?</span>
              <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Yes, delete"}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="destructive" size="sm" onClick={() => setShowDeleteConfirm(true)}>
              Delete Project
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
