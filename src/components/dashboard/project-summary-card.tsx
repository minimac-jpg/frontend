import { Code } from "lucide-react";
import { useProjects } from "@/hooks/use-projects";

export function ProjectSummaryCard() {
  const { data, isLoading, isError } = useProjects();

  const totalProjects = isLoading
    ? "…"
    : isError
      ? "—"
      : (data?.total ?? 0);

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-row items-center gap-4 p-6">
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
          <Code className="size-6 text-primary" />
        </div>
        <div>
          <p className="text-3xl font-bold">{totalProjects}</p>
          <p className="text-sm text-muted-foreground">Total Projects</p>
        </div>
      </div>
    </div>
  );
}
