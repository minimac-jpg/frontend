import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlusIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useJobs } from "@/features/pipelines/api/queries";
import type { JobStatus } from "@/features/pipelines/api/types";
import { JobListTable } from "@/features/pipelines/components/JobListTable";

function BuildsIndexRoute() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useJobs();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<JobStatus | "all">("all");

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Builds</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monitor and manage your CI/CD pipelines
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 pl-9 text-sm"
          />
        </div>
        <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as JobStatus | "all")}>
          <SelectTrigger className="h-9 w-36 text-xs">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="queued">Queued</SelectItem>
            <SelectItem value="unstable">Unstable</SelectItem>
            <SelectItem value="aborted">Aborted</SelectItem>
          </SelectContent>
        </Select>
        <Button size="sm" onClick={() => navigate({ to: "/pipelines" })}>
          <PlusIcon className="mr-1.5 size-4" />
          New Job
        </Button>
      </div>
      <JobListTable
        data={data}
        isLoading={isLoading}
        error={error}
        statusFilter={statusFilter}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export const Route = createFileRoute("/builds/")({
  component: BuildsIndexRoute,
});
