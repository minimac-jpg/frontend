import { Badge } from "../common/badge";

interface WorkerCapabilitiesProps {
  capabilities: string[];
}

function capabilityVariant(cap: string): "success" | "info" | "default" {
  switch (cap) {
    case "shell":
    case "docker":
    case "kubernetes":
      return "success";
    case "cache":
    case "artifact":
      return "info";
    default:
      return "default";
  }
}

export function WorkerCapabilities({ capabilities }: WorkerCapabilitiesProps) {
  if (capabilities.length === 0) {
    return null;
  }

  return (
    <div className="worker-capabilities">
      {capabilities.map((cap) => (
        <Badge key={cap} variant={capabilityVariant(cap)}>
          {cap}
        </Badge>
      ))}
    </div>
  );
}
