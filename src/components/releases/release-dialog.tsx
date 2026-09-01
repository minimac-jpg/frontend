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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateRelease, useProjectOptions, useUpdateRelease } from "@/hooks/use-releases";
import type { Release } from "@/types/release";

// Matches ReleaseVersion::parse in harlie-releases (semver::Version::parse).
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

interface ReleaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  release?: Release;
  onSave: () => void;
}

export function ReleaseDialog({ open, onOpenChange, release, onSave }: ReleaseDialogProps) {
  const isEdit = !!release;

  const { data: projects = [], isLoading: projectsLoading } = useProjectOptions();
  const createRelease = useCreateRelease();
  const updateRelease = useUpdateRelease(release?.id ?? "");

  const [projectId, setProjectId] = useState("");
  const [version, setVersion] = useState(release?.version ?? "");
  const [title, setTitle] = useState(release?.title ?? "");
  const [notes, setNotes] = useState(release?.notes[0]?.body ?? "");
  const [projectError, setProjectError] = useState<string | null>(null);
  const [versionError, setVersionError] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);

  const isPending = createRelease.isPending || updateRelease.isPending;

  function resetForm() {
    setProjectId("");
    setVersion("");
    setTitle("");
    setNotes("");
    setProjectError(null);
    setVersionError(null);
    setRequestError(null);
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen && !isEdit) {
      resetForm();
    }
    onOpenChange(nextOpen);
  }

  async function handleSave() {
    setRequestError(null);
    const trimmedTitle = title.trim();
    const trimmedNotes = notes.trim();
    const nextNotes = trimmedNotes
      ? [{ title: "Notes", body: trimmedNotes, format: "markdown" as const }]
      : undefined;

    if (isEdit) {
      try {
        await updateRelease.mutateAsync({
          title: trimmedTitle || undefined,
          notes: nextNotes,
        });
        onSave();
      } catch (err) {
        setRequestError(err instanceof Error ? err.message : "Failed to update release");
      }
      return;
    }

    const trimmedVersion = version.trim();
    let hasError = false;
    if (!projectId) {
      setProjectError("Select a project");
      hasError = true;
    } else {
      setProjectError(null);
    }
    if (!SEMVER_PATTERN.test(trimmedVersion)) {
      setVersionError("Version must be valid semver, e.g. 1.2.3");
      hasError = true;
    } else {
      setVersionError(null);
    }
    if (hasError) return;

    try {
      await createRelease.mutateAsync({
        projectId,
        version: trimmedVersion,
        title: trimmedTitle || undefined,
        notes: nextNotes,
      });
      onSave();
    } catch (err) {
      setRequestError(err instanceof Error ? err.message : "Failed to create release");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-xl max-h-[90vh] overflow-y-auto"
        onOpenAutoFocus={(e: Event) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit release" : "Create release"}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Only the title and notes of a draft release can be updated."
              : "Fill in the details to create a new release."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          {isEdit && release ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="release-version">Version</Label>
                <Input id="release-version" value={release.version} readOnly className="text-muted-foreground" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="release-project">Project</Label>
                <Input
                  id="release-project"
                  value={release.projectName ?? release.projectId}
                  readOnly
                  className="text-muted-foreground"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-2">
                <Label htmlFor="release-project">Project</Label>
                <Select value={projectId} onValueChange={setProjectId}>
                  <SelectTrigger id="release-project">
                    <SelectValue
                      placeholder={projectsLoading ? "Loading projects…" : "Select project"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {projectError && <p className="text-xs text-destructive">{projectError}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fix-version">Version</Label>
                <Input
                  id="fix-version"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  placeholder="e.g. 1.2.3"
                />
                <p className="text-xs text-muted-foreground">Semantic version (MAJOR.MINOR.PATCH).</p>
                {versionError && <p className="text-xs text-destructive">{versionError}</p>}
              </div>
            </>
          )}

          <div className="grid gap-2">
            <Label htmlFor="release-title">Title</Label>
            <Input
              id="release-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Q3 payments drop"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="release-notes">Notes</Label>
            <Textarea
              id="release-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Release notes (markdown supported)"
              className="min-h-28"
            />
          </div>

          {requestError && <p className="text-xs text-destructive">{requestError}</p>}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isPending || (isEdit && !release)}>
            {isPending ? "Saving…" : isEdit ? "Save changes" : "Create release"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
