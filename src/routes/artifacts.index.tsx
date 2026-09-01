import { createFileRoute } from "@tanstack/react-router";

import { ArtifactSearchScreen } from "../features/artifacts/components/ArtifactSearchScreen";

function ArtifactsIndexRoute() {
  return <ArtifactSearchScreen />;
}

export const Route = createFileRoute("/artifacts/")({

    validateSearch: (search: Record<string, unknown>): Record<string, unknown> => {
      return {
        q: typeof search.q === "string" && search.q.length > 0 ? search.q : undefined,
        format: search.format,
        repository:
          typeof search.repository === "string" && search.repository.length > 0
            ? search.repository
            : undefined,
        groupId:
          typeof search.groupId === "string" && search.groupId.length > 0
            ? search.groupId
            : undefined,
        artifactId:
          typeof search.artifactId === "string" && search.artifactId.length > 0
            ? search.artifactId
            : undefined,
        version:
          typeof search.version === "string" && search.version.length > 0
            ? search.version
            : undefined,
        classifier:
          typeof search.classifier === "string" && search.classifier.length > 0
            ? search.classifier
            : undefined,
        extension:
          typeof search.extension === "string" && search.extension.length > 0
            ? search.extension
            : undefined,
        checksum:
          typeof search.checksum === "string" && search.checksum.length > 0
            ? search.checksum
            : undefined,
        buildId:
          typeof search.buildId === "string" && search.buildId.length > 0
            ? search.buildId
            : undefined,
      };
    },
  component: ArtifactsIndexRoute,
});
