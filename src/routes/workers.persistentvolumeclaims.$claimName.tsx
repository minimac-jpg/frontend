import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { usePVC } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";
import { YamlViewer } from "@/features/console/components/YamlViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function WorkersPVCDetailRoute() {
  const { claimName } = useParams({ from: "/workers/persistentvolumeclaims/$claimName" });
  const { data, isLoading } = usePVC(claimName);

  return (
    <ResourceDetailLayout
      title="Persistent Volume Claim"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/persistentvolumeclaims"
    >
      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">PVC Details</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <dl className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Access Modes</dt>
              <dd>{(data.spec.accessModes ?? []).join(", ")}</dd>
              <dt className="text-muted-foreground">Requested Storage</dt>
              <dd className="font-mono text-xs">{data.spec.resources.requests.storage}</dd>
              <dt className="text-muted-foreground">Storage Class</dt>
              <dd>{data.spec.storageClassName ?? "-"}</dd>
              <dt className="text-muted-foreground">Volume Mode</dt>
              <dd>{data.spec.volumeMode ?? "-"}</dd>
              {data.status.capacity?.storage && (
                <>
                  <dt className="text-muted-foreground">Actual Capacity</dt>
                  <dd className="font-mono text-xs">{data.status.capacity.storage}</dd>
                </>
              )}
            </dl>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">PVC YAML</CardTitle>
        </CardHeader>
        <CardContent>
          <YamlViewer obj={data as unknown as Record<string, unknown>} />
        </CardContent>
      </Card>
    </ResourceDetailLayout>
  );
}

export const Route = createFileRoute("/workers/persistentvolumeclaims/$claimName")({

  component: WorkersPVCDetailRoute,
});
