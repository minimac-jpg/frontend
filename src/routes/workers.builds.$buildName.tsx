import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { useBuild } from "@/features/console/api/queries";
import { ResourceDetailLayout } from "@/features/console/components/ResourceDetailLayout";
import { YamlViewer } from "@/features/console/components/YamlViewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function WorkersBuildDetailRoute() {
  const { buildName } = useParams({ from: "/workers/builds/$buildName" });
  const { data, isLoading } = useBuild(buildName);

  return (
    <ResourceDetailLayout
      title="Build"
      resource={data}
      isLoading={isLoading}
      status={data?.status.phase}
      backUrl="/workers/builds"
    >
      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Build Details</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <dl className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Strategy</dt>
              <dd>{data.spec.strategy.type}</dd>
              <dt className="text-muted-foreground">Source</dt>
              <dd>{data.spec.source.type}{data.spec.source.git ? ` (${data.spec.source.git.uri})` : ""}</dd>
              <dt className="text-muted-foreground">Output Image</dt>
              <dd className="font-mono text-xs">{data.spec.output.to.name}</dd>
              {data.status.completionTimestamp && (
                <>
                  <dt className="text-muted-foreground">Completed</dt>
                  <dd>{new Date(data.status.completionTimestamp).toLocaleString()}</dd>
                </>
              )}
            </dl>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Build YAML</CardTitle>
        </CardHeader>
        <CardContent>
          <YamlViewer obj={data as unknown as Record<string, unknown>} />
        </CardContent>
      </Card>
    </ResourceDetailLayout>
  );
}

export const Route = createFileRoute("/workers/builds/$buildName")({

  component: WorkersBuildDetailRoute,
});
