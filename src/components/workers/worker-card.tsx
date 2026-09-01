import type { Worker } from "../../types/worker";
import { WorkerActions } from "./worker-actions";
import { WorkerCapabilities } from "./worker-capabilities";
import { WorkerStatusBadge } from "./worker-status-badge";

interface WorkerCardProps {
  worker: Worker;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

export function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <div className="worker-card">
      <div className="worker-card-header">
        <div className="worker-card-identity">
          <h3 className="worker-card-name">{worker.name}</h3>
          <span className="worker-card-id">{worker.id.slice(0, 8)}</span>
        </div>
        <WorkerStatusBadge status={worker.status} />
      </div>

      <WorkerCapabilities capabilities={worker.capabilities} />

      <div className="worker-card-meta">
        <span className="worker-card-heartbeat">Last seen: {formatDate(worker.lastSeen)}</span>
      </div>

      <WorkerActions workerId={worker.id} status={worker.status} />
    </div>
  );
}
