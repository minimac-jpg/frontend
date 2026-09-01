import { ResourceStatusBadge } from "./ResourceStatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ClockIcon, TagIcon, FolderOpenIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface ResourceDetailLayoutProps {
  title: string;
  resource: { metadata: { name: string; namespace: string; uid: string; creationTimestamp?: string } } | null | undefined;
  isLoading: boolean;
  status: string | undefined;
  backUrl: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function ResourceDetailLayout({ title, resource, isLoading, status, backUrl, actions, children }: ResourceDetailLayoutProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!resource) {
    return <p className="py-12 text-center text-sm text-muted-foreground">Resource not found</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate({ to: backUrl })}>
            <ArrowLeftIcon className="size-4" />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
              {status && <ResourceStatusBadge status={status} />}
            </div>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">{resource.metadata.name}</p>
          </div>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {children}
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <TagIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-mono text-xs">{resource.metadata.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FolderOpenIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Namespace</p>
                  <p className="font-mono text-xs">{resource.metadata.namespace}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ClockIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Created</p>
                  <p className="font-mono text-xs">{resource.metadata.creationTimestamp ? new Date(resource.metadata.creationTimestamp).toLocaleString() : "Unknown"}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TagIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">UID</p>
                  <p className="font-mono text-xs break-all">{resource.metadata.uid}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
