import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { useService } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";
import { YamlViewer } from "@/features/console/components/YamlViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function WorkersServiceDetailRoute() {
  const { serviceName } = useParams({ from: "/workers/services/$serviceName" });
  const { data, isLoading } = useService(serviceName);

  return (
    <ResourceDetailLayout
      title="Service"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/services"
    >
      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Service Details</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <dl className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Type</dt>
              <dd>{data.spec.type}</dd>
              <dt className="text-muted-foreground">Cluster IP</dt>
              <dd className="font-mono text-xs">{data.spec.clusterIP ?? "-"}</dd>
              {data.spec.externalIP && (
                <>
                  <dt className="text-muted-foreground">External IP</dt>
                  <dd className="font-mono text-xs">{data.spec.externalIP}</dd>
                </>
              )}
              <dt className="text-muted-foreground">Ports</dt>
              <dd>
                {(data.spec.ports ?? []).map((p) => (
                  <div key={p.port} className="font-mono text-xs">
                    {p.port}/{p.protocol} {p.targetPort ? `→ ${p.targetPort}` : ""}
                  </div>
                ))}
              </dd>
            </dl>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Service YAML</CardTitle>
        </CardHeader>
        <CardContent>
          <YamlViewer obj={data as unknown as Record<string, unknown>} />
        </CardContent>
      </Card>
    </ResourceDetailLayout>
  );
}

export const Route = createFileRoute("/workers/services/$serviceName")({

  component: WorkersServiceDetailRoute,
});
