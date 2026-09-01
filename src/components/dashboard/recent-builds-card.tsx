import { Pickaxe } from "lucide-react";
import { useRecentBuilds } from "@/features/pipelines/api/queries";
import type { Build } from "@/features/pipelines/api/types";

const statusColor: Record<string, string> = {
  success: "bg-emerald-500/10 text-emerald-600",
  running: "bg-sky-500/10 text-sky-600",
  failed: "bg-red-500/10 text-red-600",
  queued: "bg-amber-500/10 text-amber-600",
  cancelled: "bg-gray-500/10 text-gray-600",
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function RecentBuildsCard() {
  const { data, isLoading, isError } = useRecentBuilds(5);
  const builds: Build[] = data ?? [];

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="px-6 py-4 flex items-center gap-2 border-b">
        <Pickaxe className="size-5 text-muted-foreground" />
        <h3 className="text-lg font-semibold">Recent Builds</h3>
      </div>
      {isLoading ? (
        <p className="px-6 py-8 text-sm text-muted-foreground">Loading builds…</p>
      ) : isError ? (
        <p className="px-6 py-8 text-sm text-destructive" role="alert">
          Failed to load builds.
        </p>
      ) : builds.length === 0 ? (
        <p className="px-6 py-8 text-sm text-muted-foreground">No builds yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t text-muted-foreground">
                <th className="px-6 py-3 text-left font-medium">Build</th>
                <th className="px-6 py-3 text-left font-medium">Branch</th>
                <th className="px-6 py-3 text-left font-medium">Hash</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">User</th>
                <th className="px-6 py-3 text-left font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {builds.map((build) => (
                <tr key={build.id} className="border-t hover:bg-gray-200/90">
                  <td className="px-6 py-3 font-medium">#{build.number}</td>
                  <td className="px-6 py-3 text-muted-foreground">{build.branch || "—"}</td>
                  <td className="px-6 py-3 font-mono text-xs text-muted-foreground">
                    {build.commitHash ? build.commitHash.slice(0, 8) : "—"}
                  </td>
                  <td className="px-6 py-3">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${statusColor[build.status] ?? ""}`}
                    >
                      {build.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">{build.triggeredBy || "—"}</td>
                  <td className="px-6 py-3 text-muted-foreground">{formatDate(build.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
