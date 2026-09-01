import type { CacheEntry } from "../../types/cache";
import { Badge } from "../common/badge";

interface CacheCardProps {
  entry: CacheEntry;
}

function formatSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(1)} ${units[i]}`;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function kindVariant(kind: string): "success" | "info" | "default" {
  switch (kind.toLowerCase()) {
    case "build":
      return "success";
    case "dependency":
      return "info";
    case "artifact":
      return "info";
    default:
      return "default";
  }
}

function statusVariant(status: string): "success" | "warning" | "error" | "default" {
  switch (status) {
    case "active":
      return "success";
    case "pending":
      return "warning";
    case "expired":
    case "evicted":
      return "error";
    default:
      return "default";
  }
}

export function CacheCard({ entry }: CacheCardProps) {
  return (
    <div className="cache-card">
      <div className="cache-card-header">
        <h3 className="cache-card-key">{entry.key}</h3>
        <div className="cache-card-badges">
          <Badge variant={kindVariant(entry.kind)}>{entry.kind}</Badge>
          <Badge variant={statusVariant(entry.status)}>{entry.status}</Badge>
          {entry.immutable && <Badge variant="info">immutable</Badge>}
        </div>
      </div>

      <div className="cache-card-meta">
        <span className="cache-card-size">{formatSize(entry.size_bytes)}</span>
        <span className="cache-card-scope">{entry.scope}</span>
        <span className="cache-card-id">{entry.cache_id}</span>
        {entry.branch && <span className="cache-card-branch">{entry.branch}</span>}
      </div>

      {entry.checksum && <div className="cache-card-checksum">{entry.checksum}</div>}

      <div className="cache-card-footer">
        <span className="cache-card-access">
          accessed {entry.access_count} time{entry.access_count !== 1 ? "s" : ""}
        </span>
        <span className="cache-card-date">{formatDate(entry.created_at)}</span>
      </div>
    </div>
  );
}
