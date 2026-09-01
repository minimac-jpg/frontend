import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "../components/projects/projects-page";

function ProjectsRoute() {
  return <ProjectsPage />;
}

export const Route = createFileRoute("/projects")({

  component: ProjectsRoute,
});
