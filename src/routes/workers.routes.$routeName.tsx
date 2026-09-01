import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { useRoute } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";
import { YamlViewer } from "@/features/console/components/YamlViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function WorkersRouteDetailRoute() {
  const { routeName } = useParams({ from: "/workers/routes/$routeName" });
  const { data, isLoading } = useRoute(routeName);

  return (
    <ResourceDetailLayout
      title="Route"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/routes"
    >
      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Route Details</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <dl className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Host</dt>
              <dd className="font-mono text-xs">{data.spec.host}</dd>
              <dt className="text-muted-foreground">Path</dt>
              <dd>{data.spec.path ?? "/"}</dd>
              <dt className="text-muted-foreground">Target Service</dt>
              <dd>{data.spec.to.name}</dd>
              <dt className="text-muted-foreground">Target Port</dt>
              <dd>{data.spec.port?.targetPort ?? "-"}</dd>
              {data.spec.tls && (
                <>
                  <dt className="text-muted-foreground">TLS Termination</dt>
                  <dd>{data.spec.tls.termination}</dd>
                </>
              )}
            </dl>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Route YAML</CardTitle>
        </CardHeader>
        <CardContent>
          <YamlViewer obj={data as unknown as Record<string, unknown>} />
        </CardContent>
      </Card>
    </ResourceDetailLayout>
  );
}

export const Route = createFileRoute("/workers/routes/$routeName")({

  component: WorkersRouteDetailRoute,
});
