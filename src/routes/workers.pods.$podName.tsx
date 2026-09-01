import { createFileRoute,
  useParams, useNavigate,
} from "@tanstack/react-router";
import { usePod, useDeletePod } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";
import { YamlViewer } from "@/features/console/components/YamlViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2Icon, RotateCcwIcon } from "lucide-react";
import { ResourceStatusBadge } from "@/features/console/components/ResourceStatusBadge";

function getContainerState(state: Record<string, unknown>): string {
  const keys = Object.keys(state);
  return (keys.length > 0 ? keys[0] : "Unknown") ?? "Unknown";
}

function WorkersPodDetailRoute() {
  const { podName } = useParams({ from: "/workers/pods/$podName" });
  const { data, isLoading } = usePod(podName);
  const deletePod = useDeletePod();
  const navigate = useNavigate();

  const containerStatuses = data?.status.containerStatuses ?? [];

  return (
    <ResourceDetailLayout
      title="Pod"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/pods"
      actions={
        <>
          <Button variant="outline" size="sm" disabled>
            <RotateCcwIcon className="mr-1.5 size-3.5" />
            Restart
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              deletePod.mutate(podName, { onSuccess: () => navigate({ to: "/workers/pods" }) });
            }}
            disabled={deletePod.isPending}
          >
            <Trash2Icon className="mr-1.5 size-3.5" />
            Delete
          </Button>
        </>
      }
    >
      {containerStatuses.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Containers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {containerStatuses.map((cs) => (
                <div key={cs.name} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                  <span className="font-medium">{cs.name}</span>
                  <div className="flex items-center gap-2">
                    <ResourceStatusBadge status={getContainerState(cs.state)} />
                    <span className="font-mono text-xs text-muted-foreground">{cs.image}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Pod YAML</CardTitle>
        </CardHeader>
        <CardContent>
          <YamlViewer obj={data as unknown as Record<string, unknown>} />
        </CardContent>
      </Card>
    </ResourceDetailLayout>
  );
}

export const Route = createFileRoute("/workers/pods/$podName")({

  component: WorkersPodDetailRoute,
});
