import { Card } from "@/components/common/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function ArtifactSettingsPanel() {
  return (
    <div className="space-y-6">
      <Card title="Repository Connections">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-md border px-3 py-2">
            <div>
              <p className="text-sm font-medium text-foreground">Maven Central</p>
              <p className="text-xs text-muted-foreground font-mono">
                https://repo1.maven.org/maven2/
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              Proxy
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border px-3 py-2">
            <div>
              <p className="text-sm font-medium text-foreground">npm Registry</p>
              <p className="text-xs text-muted-foreground font-mono">https://registry.npmjs.org/</p>
            </div>
            <Badge variant="outline" className="text-xs">
              Proxy
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border px-3 py-2">
            <div>
              <p className="text-sm font-medium text-foreground">Internal Releases</p>
              <p className="text-xs text-muted-foreground font-mono">Hosted</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              Hosted
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border px-3 py-2">
            <div>
              <p className="text-sm font-medium text-foreground">Docker Registry</p>
              <p className="text-xs text-muted-foreground font-mono">
                https://registry-1.docker.io/
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              Proxy
            </Badge>
          </div>
        </div>
      </Card>

      <Card title="Cleanup Policies">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-md border px-3 py-2">
            <p className="text-sm text-foreground">Remove snapshots older than 30 days</p>
            <Badge variant="secondary" className="text-xs">
              Active
            </Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border px-3 py-2">
            <p className="text-sm text-foreground">Remove unreferenced Docker images</p>
            <Badge variant="secondary" className="text-xs">
              Active
            </Badge>
          </div>
        </div>
      </Card>

      <Separator />

      <p className="text-xs text-muted-foreground">
        Artifact settings are read-only in this mock. These will be configurable when a real backend
        is connected.
      </p>
    </div>
  );
}
