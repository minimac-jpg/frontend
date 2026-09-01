import { usePipelines } from "../../hooks/use-pipelines";
import { EmptyState } from "../common/empty-state";
import { ErrorState } from "../common/error-state";
import { LoadingState } from "../common/loading-state";
import { PipelineCard } from "./pipeline-card";

export function PipelineList() {
  const { data, isLoading, error } = usePipelines();

  if (isLoading) {
    return <LoadingState message="Loading pipelines..." />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (!data || data.items.length === 0) {
    return <EmptyState title="No pipelines" description="Create a pipeline to start building." />;
  }

  return (
    <div className="pipeline-list">
      {data.items.map((pipeline) => (
        <PipelineCard key={pipeline.id} pipeline={pipeline} />
      ))}
    </div>
  );
}
