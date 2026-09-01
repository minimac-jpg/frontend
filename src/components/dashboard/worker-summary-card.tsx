import { useQuery } from "@tanstack/react-query";
import { Blocks } from "lucide-react";
import { apiGet } from "@/lib/api/client";

interface WorkersResponse {
  workers: unknown[];
  total: number;
}

export function WorkerSummaryCard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["workers", "summary"],
    queryFn: () => apiGet<WorkersResponse>("/api/workers"),
  });

  const totalWorkers = isLoading ? "…" : isError ? "—" : (data?.total ?? 0);

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-row items-center gap-4 p-6">
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
          <Blocks className="size-6 text-primary" />
        </div>
        <div>
          <p className="text-3xl font-bold">{totalWorkers}</p>
          <p className="text-sm text-muted-foreground">Total Workers</p>
        </div>
      </div>
    </div>
  );
}
