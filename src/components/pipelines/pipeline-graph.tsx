interface GraphNode {
  id: string;
  name: string;
  type: "stage" | "job" | "step";
  status?: string;
}

interface GraphEdge {
  from: string;
  to: string;
}

interface PipelineGraphProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

function statusColor(status?: string): string {
  switch (status) {
    case "completed":
      return "#16a34a";
    case "running":
      return "#2563eb";
    case "pending":
      return "#a3a3a3";
    case "failed":
      return "#dc2626";
    default:
      return "#e5e5e5";
  }
}

export function PipelineGraph({ nodes, edges }: PipelineGraphProps) {
  if (nodes.length === 0) {
    return (
      <div className="pipeline-graph pipeline-graph-empty">
        <p>No execution plan available. Compile the pipeline to view the graph.</p>
      </div>
    );
  }

  return (
    <div className="pipeline-graph">
      <div className="pipeline-graph-nodes">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="pipeline-graph-node"
            style={{ borderColor: statusColor(node.status) }}
          >
            <span className="pipeline-graph-node-name">{node.name}</span>
            <span className="pipeline-graph-node-type">{node.type}</span>
            {node.status && (
              <span
                className="pipeline-graph-node-status"
                style={{ color: statusColor(node.status) }}
              >
                {node.status}
              </span>
            )}
          </div>
        ))}
      </div>
      {edges.length > 0 && (
        <div className="pipeline-graph-edges">
          {edges.map((edge, i) => (
            <span key={i} className="pipeline-graph-edge">
              {edge.from} &rarr; {edge.to}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
