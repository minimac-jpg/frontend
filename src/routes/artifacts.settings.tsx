import { ArrowLeftIcon } from "lucide-react";
import { createFileRoute,
  Link,
} from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArtifactSettingsPanel } from "../features/artifacts/components/ArtifactSettingsPanel";

function ArtifactSettingsRoute() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Link to="/artifacts">
        <Button variant="outline" size="sm">
          <ArrowLeftIcon className="size-4" />
          Back
        </Button>
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Artifact Settings
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Configure repository connections and cleanup policies.
          </p>
        </div>
      </div>
      <ArtifactSettingsPanel />
    </div>
  );
}

export const Route = createFileRoute("/artifacts/settings")({

  component: ArtifactSettingsRoute,
});
