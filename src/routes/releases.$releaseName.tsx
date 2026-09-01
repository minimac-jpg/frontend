import { createFileRoute,
  useParams, useNavigate,
} from "@tanstack/react-router";
import { useMemo } from "react";
import { useReleases } from "@/hooks/use-releases";
import { ReleaseDetailPage } from "@/components/releases/release-detail-page";

function ReleaseDetailRoute() {
  const { releaseName } = useParams({ from: "/releases/$releaseName" });
  const navigate = useNavigate();
  const { data: releases = [], isLoading } = useReleases();

  const release = useMemo(() => {
    const decoded = decodeURIComponent(releaseName);
    return releases.find(
      (r) =>
        r.name === decoded ||
        r.version === decoded ||
        r.id === decoded ||
        (r.title !== null && r.title === decoded),
    );
  }, [releases, releaseName]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
        <p className="text-sm">Loading release…</p>
      </div>
    );
  }

  if (!release) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
        <p className="text-lg font-medium">Release not found</p>
        <button
          type="button"
          onClick={() => navigate({ to: "/releases" })}
          className="text-sm underline hover:text-foreground"
        >
          Back to releases
        </button>
      </div>
    );
  }

  return <ReleaseDetailPage releaseId={release.id} fallback={release} />;
}

export const Route = createFileRoute("/releases/$releaseName")({

  component: ReleaseDetailRoute,
});
