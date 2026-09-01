import { createFileRoute } from "@tanstack/react-router";

import { ReleasesPage } from "../components/releases/releases-page";

function ReleasesIndexRoute() {
  return <ReleasesPage />;
}

export const Route = createFileRoute("/releases/")({

  component: ReleasesIndexRoute,
});
