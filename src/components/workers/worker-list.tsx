import { useWorkers } from "../../hooks/use-workers";
import { EmptyState } from "../common/empty-state";
import { ErrorState } from "../common/error-state";
import { LoadingState } from "../common/loading-state";
import { WorkerCard } from "./worker-card";

export function WorkerList() {
  const { data, isLoading, error } = useWorkers();

  if (isLoading) {
    return <LoadingState message="Loading workers..." />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (!data || data.items.length === 0) {
    return <EmptyState title="No workers" description="No workers are currently registered." />;
  }

  return (
    <div className="worker-list">
      {data.items.map((worker) => (
        <WorkerCard key={worker.id} worker={worker} />
      ))}
    </div>
  );
}
