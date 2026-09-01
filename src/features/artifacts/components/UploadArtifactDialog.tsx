import { LoaderIcon, UploadIcon } from "lucide-react";
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
import { toast } from "@/components/ui/toast";
import { useUploadArtifact } from "../api/queries";
import type { FormatType, UploadArtifactRequest } from "../api/types";

const FORMAT_OPTIONS: { value: FormatType; label: string }[] = [
  { value: "maven", label: "Maven" },
  { value: "npm", label: "npm" },
  { value: "docker", label: "Docker" },
  { value: "pypi", label: "PyPI" },
  { value: "nuget", label: "NuGet" },
];

interface UploadArtifactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const INITIAL_STATE: UploadArtifactRequest = {
  format: "maven",
  repository: "",
  group: "",
  name: "",
  version: "",
  extension: "",
  description: "",
  classifier: "",
  buildId: "",
};

export function UploadArtifactDialog({ open, onOpenChange }: UploadArtifactDialogProps) {
  const [form, setForm] = useState<UploadArtifactRequest>(INITIAL_STATE);
  const [file, setFile] = useState<File | null>(null);
  const upload = useUploadArtifact();

  function update<K extends keyof UploadArtifactRequest>(key: K, value: UploadArtifactRequest[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.buildId?.trim()) {
      upload.reset();
      toast.error("Build ID (UUID) is required.");
      return;
    }
    if (!file) {
      upload.reset();
      toast.error("Please choose a file to upload.");
      return;
    }
    try {
      await upload.mutateAsync({ ...form, buildId: form.buildId?.trim() || "", file });
      toast.success("Artifact uploaded successfully.");
      setForm(INITIAL_STATE);
      setFile(null);
      onOpenChange(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed.");
    }
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      setForm(INITIAL_STATE);
      setFile(null);
      upload.reset();
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Upload Artifact</DialogTitle>
            <DialogDescription>
              Upload a file for a build. The artifact is stored by the artifacts service.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="upload-build-id">Build ID (UUID)</Label>
                <Input
                  id="upload-build-id"
                  placeholder="e.g. 0b3f7c1e-…"
                  value={form.buildId ?? ""}
                  onChange={(e) => update("buildId", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="upload-file">File</Label>
                <Input
                  id="upload-file"
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="upload-format">Format</Label>
                <Select
                  value={form.format}
                  onValueChange={(v) => update("format", v as FormatType)}
                >
                  <SelectTrigger id="upload-format">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {FORMAT_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="upload-name">Name</Label>
                <Input
                  id="upload-name"
                  placeholder="e.g. my-lib"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="upload-classifier">Classifier</Label>
                <Input
                  id="upload-classifier"
                  placeholder="e.g. sources (optional)"
                  value={form.classifier ?? ""}
                  onChange={(e) => update("classifier", e.target.value || undefined)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="upload-repository">Repository</Label>
                <Input
                  id="upload-repository"
                  placeholder="e.g. maven-releases"
                  value={form.repository}
                  onChange={(e) => update("repository", e.target.value)}
                />
              </div>
            </div>

            {upload.isError && upload.error instanceof Error && (
              <div
                className="rounded-md border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive"
                role="alert"
              >
                {upload.error.message}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={upload.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={upload.isPending}>
              {upload.isPending ? (
                <LoaderIcon className="size-4 animate-spin" />
              ) : (
                <UploadIcon className="size-4" />
              )}
              Upload
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
