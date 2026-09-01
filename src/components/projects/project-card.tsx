import { Link } from "@tanstack/react-router";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

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

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to="/projects/$projectName" params={{ projectName: project.name }} className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-name">{project.name}</h3>
      </div>
      {project.description && <p className="project-card-description">{project.description}</p>}
      <div className="project-card-meta">
        <span className="project-card-date">Updated {formatDate(project.updatedAt)}</span>
      </div>
    </Link>
  );
}
