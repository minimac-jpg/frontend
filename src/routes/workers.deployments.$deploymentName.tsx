import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { useDeployment, useScaleDeployment } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";
import { YamlViewer } from "@/features/console/components/YamlViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon, RotateCcwIcon } from "lucide-react";

function WorkersDeploymentDetailRoute() {
  const { deploymentName } = useParams({ from: "/workers/deployments/$deploymentName" });
  const { data, isLoading } = useDeployment(deploymentName);
  const scaleDeployment = useScaleDeployment();

  const specReplicas = data?.spec.replicas ?? 0;
  const readyReplicas = data?.status.readyReplicas ?? 0;
  const availableReplicas = data?.status.availableReplicas ?? 0;

  const handleScale = (delta: number) => {
    const newReplicas = Math.max(0, specReplicas + delta);
    scaleDeployment.mutate({ name: deploymentName, replicas: newReplicas });
  };

  return (
    <ResourceDetailLayout
      title="Deployment"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/deployments"
      actions={
        <Button variant="outline" size="sm" disabled>
          <RotateCcwIcon className="mr-1.5 size-3.5" />
          Rollback
        </Button>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Scaling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => handleScale(-1)} disabled={specReplicas <= 0 || scaleDeployment.isPending}>
              <MinusIcon className="size-4" />
            </Button>
            <div className="text-center">
              <p className="text-2xl font-bold">{specReplicas}</p>
              <p className="text-xs text-muted-foreground">Replicas</p>
            </div>
            <Button variant="outline" size="icon" onClick={() => handleScale(1)} disabled={scaleDeployment.isPending}>
              <PlusIcon className="size-4" />
            </Button>
            <div className="ml-4 flex gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Ready: </span>
                <span className="font-medium text-emerald-500">{readyReplicas}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Available: </span>
                <span className="font-medium text-emerald-500">{availableReplicas}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Deployment YAML</CardTitle>
        </CardHeader>
        <CardContent>
          <YamlViewer obj={data as unknown as Record<string, unknown>} />
        </CardContent>
      </Card>
    </ResourceDetailLayout>
  );
}

export const Route = createFileRoute("/workers/deployments/$deploymentName")({

  component: WorkersDeploymentDetailRoute,
});
