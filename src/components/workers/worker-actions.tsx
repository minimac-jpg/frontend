import { useDrainWorker, useRemoveWorker } from "../../hooks/use-workers";
import { Button } from "../common/button";

interface WorkerActionsProps {
  workerId: string;
  status: string;
}

export function WorkerActions({ workerId, status }: WorkerActionsProps) {
  const { mutateAsync: drainWorker, isPending: isDraining } = useDrainWorker();
  const { mutateAsync: removeWorker, isPending: isRemoving } = useRemoveWorker();

  const canDrain = status === "ready" || status === "online" || status === "busy";
  const canRemove = status === "offline" || status === "draining" || status === "failed";

  const handleDrain = async () => {
    try {
      await drainWorker(workerId);
    } catch {
      // error captured in mutation
    }
  };

  const handleRemove = async () => {
    try {
      await removeWorker(workerId);
    } catch {
      // error captured in mutation
    }
  };

  return (
    <div className="worker-actions">
      {canDrain && (
        <Button variant="secondary" size="sm" onClick={handleDrain} disabled={isDraining}>
          {isDraining ? "Draining..." : "Drain"}
        </Button>
      )}
      {canRemove && (
        <Button variant="danger" size="sm" onClick={handleRemove} disabled={isRemoving}>
          {isRemoving ? "Removing..." : "Remove"}
        </Button>
      )}
    </div>
  );
}
