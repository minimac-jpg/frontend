import { DownloadIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { errorToMessage, toast } from "@/components/ui/toast";
import { downloadArtifact } from "../api/queries";
import type { Asset } from "../api/types";

interface AssetListProps {
  assets: Asset[];
  artifactId: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** i;
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i] ?? ""}`;
}

export function AssetList({ assets, artifactId }: AssetListProps) {
  const [downloadingAsset, setDownloadingAsset] = useState<string | null>(null);

  async function handleDownload(asset: Asset) {
    setDownloadingAsset(asset.name);
    try {
      await downloadArtifact(artifactId, asset.name);
    } catch (err) {
      toast.error(`Download failed: ${errorToMessage(err)}`);
    } finally {
      setDownloadingAsset(null);
    }
  }

  if (assets.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
        No assets associated with this component.
      </div>
    );
  }

  return (
    <div className="divide-y divide-border rounded-md border">
      {assets.map((asset) => (
        <div key={asset.name} className="flex items-center justify-between gap-4 px-3 py-2.5">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-mono text-foreground">{asset.name}</p>
            <p className="text-xs text-muted-foreground">
              {formatBytes(asset.sizeBytes)} &middot; {asset.contentType}
            </p>
          </div>
          <Button
            variant="outline"
            size="xs"
            onClick={() => handleDownload(asset)}
            disabled={downloadingAsset !== null}
          >
            {downloadingAsset === asset.name ? (
              <LoaderIcon className="size-3 animate-spin" />
            ) : (
              <DownloadIcon className="size-3" />
            )}
            Download
          </Button>
        </div>
      ))}
    </div>
  );
}
