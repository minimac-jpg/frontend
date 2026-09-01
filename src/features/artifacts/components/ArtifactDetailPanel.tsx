import { useNavigate } from "@tanstack/react-router";
import { ArrowLeftIcon, CopyIcon, DownloadIcon, ExternalLinkIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { useCallback, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster, errorToMessage, toast } from "@/components/ui/toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { downloadArtifact, useArtifactDetail, useDeleteArtifact } from "../api/queries";
import type { FormatType } from "../api/types";
import { formatBadgeColorMap } from "../utils/format-colors";
import { AssetList } from "./AssetList";
import { ChecksumBlock } from "./ChecksumBlock";

interface ArtifactDetailPanelProps {
  componentId: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** i;
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i] ?? ""}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ArtifactDetailPanel({ componentId }: ArtifactDetailPanelProps) {
  const navigate = useNavigate();
  const { data: component, isLoading, error } = useArtifactDetail(componentId);
  const deleteArtifact = useDeleteArtifact();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyCoordinates = useCallback(async () => {
    if (!component) return;
    const coords = `${component.group}:${component.name}:${component.version}`;
    await navigator.clipboard.writeText(coords);
  }, [component]);

  const handleDownload = useCallback(async () => {
    if (!component || component.assets.length === 0) return;
    setIsDownloading(true);
    try {
      await downloadArtifact(component.id, component.assets[0]?.name ?? component.name);
    } catch (err) {
      toast.error(`Download failed: ${errorToMessage(err)}`);
    } finally {
      setIsDownloading(false);
    }
  }, [component]);

  const handleDelete = useCallback(() => {
    if (!component) return;
    deleteArtifact.mutate(component.id, {
      onSuccess: () => {
        toast.success("Artifact deleted.");
        navigate({ to: "/artifacts" });
      },
      onError: (err) => {
        toast.error(`Delete failed: ${errorToMessage(err)}`);
      },
    });
  }, [component, deleteArtifact, navigate]);

  if (error) {
    return (
      <div className="space-y-4 p-6">
        <Button variant="ghost" size="sm" onClick={() => navigate({ to: "/artifacts" })}>
          <ArrowLeftIcon className="size-4" />
          Back to search
        </Button>
        <div
          className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
          role="alert"
        >
          <p className="font-medium">Failed to load component</p>
          <p className="mt-1 text-destructive/80">{error.message}</p>
        </div>
      </div>
    );
  }

  if (isLoading || !component) {
    return (
      <div className="space-y-4 p-6">
        <Button variant="ghost" size="sm" disabled>
          <ArrowLeftIcon className="size-4" />
          Back to search
        </Button>
        <div className="space-y-4">
          <Skeleton className="h-8 w-96" />
          <Skeleton className="h-5 w-64" />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20" />
            ))}
          </div>
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Back button */}
      <Button variant="ghost" size="sm" onClick={() => navigate({ to: "/artifacts" })}>
        <ArrowLeftIcon className="size-4" />
        Back to search
      </Button>

      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground font-mono">{component.group}</p>
            <h1 className="truncate text-xl font-semibold text-foreground">{component.name}</h1>
            <p className="font-mono text-sm text-muted-foreground">v{component.version}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge
              variant="outline"
              className={formatBadgeColorMap[component.format as FormatType]}
            >
              {component.format}
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs">
              .{component.extension}
            </Badge>
          </div>
        </div>
        {component.description && (
          <p className="mt-2 text-sm text-muted-foreground">{component.description}</p>
        )}
      </div>

      <Separator />

      {/* Metadata grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <dt className="text-xs font-medium text-muted-foreground">Version</dt>
          <dd className="font-mono text-sm text-foreground">{component.version}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-muted-foreground">Repository</dt>
          <dd className="text-sm text-foreground">{component.repository}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-muted-foreground">Last Modified</dt>
          <dd className="text-sm text-foreground">{formatDate(component.modifiedAt)}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-muted-foreground">Size</dt>
          <dd className="font-mono text-sm text-foreground">{formatBytes(component.sizeBytes)}</dd>
        </div>
      </div>

      <Separator />

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={handleCopyCoordinates}>
                <CopyIcon className="size-3.5" />
                Copy Coordinates
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">group:name:version</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button variant="outline" size="sm" asChild>
          <a href={`/artifacts?q=${component.name}`}>
            <ExternalLinkIcon className="size-3.5" />
            View all versions
          </a>
        </Button>

        {component.assets.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <LoaderIcon className="size-3.5 animate-spin" />
            ) : (
              <DownloadIcon className="size-3.5" />
            )}
            Download
          </Button>
        )}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2Icon className="size-3.5" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete component?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete{" "}
                <span className="font-medium text-foreground">
                  {component.group}:{component.name}:{component.version}
                </span>{" "}
                and all its assets. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete();
                }}
                disabled={deleteArtifact.isPending}
              >
                {deleteArtifact.isPending ? (
                  <LoaderIcon className="size-3.5 animate-spin" />
                ) : (
                  "Delete"
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Separator />

      {/* Assets */}
      <section>
        <h3 className="mb-3 text-sm font-medium text-foreground">
          Assets ({component.assets.length})
        </h3>
        <AssetList assets={component.assets} artifactId={component.id} />
      </section>

      <Separator />

      {/* Checksums */}
      <ChecksumBlock checksums={component.checksums} />

      <Toaster />

      {/* Dependents */}
      {component.dependents.length > 0 && (
        <>
          <Separator />
          <section>
            <h3 className="mb-3 text-sm font-medium text-foreground">
              Used by ({component.dependents.length})
            </h3>
            <div className="divide-y divide-border rounded-md border">
              {component.dependents.map((dep) => (
                <div
                  key={`${dep.name}@${dep.version}`}
                  className="flex items-center justify-between px-3 py-2"
                >
                  <span className="font-mono text-sm text-foreground">{dep.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{dep.version}</span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
