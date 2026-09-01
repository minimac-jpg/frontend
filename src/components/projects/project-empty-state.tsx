import { Button } from "../common/button";

interface ProjectEmptyStateProps {
  onCreateClick?: () => void;
}

export function ProjectEmptyState({ onCreateClick }: ProjectEmptyStateProps) {
  return (
    <div className="project-empty-state">
      <h3 className="project-empty-state-title">No projects yet</h3>
      <p className="project-empty-state-description">
        Create your first project to start managing pipelines and builds.
      </p>
      {onCreateClick && (
        <Button variant="primary" onClick={onCreateClick}>
          Create Project
        </Button>
      )}
    </div>
  );
}
