import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ReleaseArtifactRow } from "@/types/release";
import { PageTitle } from "../common/page-title";

const environmentOptions = ["Dev", "QA", "QA2", "Staging", "Production"];

interface EnvSelection {
  [artifactId: string]: {
    qa: string;
    stg: string;
    prd: string;
  };
}

interface DeployEnvTabProps {
  artifacts: ReleaseArtifactRow[];
}

export function DeployEnvTab({ artifacts }: DeployEnvTabProps) {
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selections, setSelections] = useState<EnvSelection>({});

  const activeArtifacts = useMemo(
    () => artifacts.filter((a) => !a.isRemoved),
    [artifacts],
  );

  const sorted = useMemo(() => {
    const sorted = [...activeArtifacts].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    if (sortDir === "desc") sorted.reverse();
    return sorted;
  }, [activeArtifacts, sortDir]);

  function setEnv(artifactId: string, col: "qa" | "stg" | "prd", value: string) {
    setSelections((prev) => ({
      ...prev,
      [artifactId]: {
        qa: "",
        stg: "",
        prd: "",
        ...prev[artifactId],
        [col]: value,
      },
    }));
  }

  function getEnv(artifactId: string, col: "qa" | "stg" | "prd") {
    return selections[artifactId]?.[col] ?? "";
  }

  function renderSelect(artifact: ReleaseArtifactRow, col: "qa" | "stg" | "prd") {
    return (
      <Select
        value={getEnv(artifact.id, col)}
        onValueChange={(v) => setEnv(artifact.id, col, v)}
      >
        <SelectTrigger className="h-9 w-full text-muted-foreground data-placeholder:text-muted-foreground">
          <SelectValue placeholder="Select Environment" />
        </SelectTrigger>
        <SelectContent>
          {environmentOptions.map((env) => (
            <SelectItem key={env} value={env}>
              {env}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <div>
      <PageTitle
        title="Deployment Environments"
        subtitle="Select the default deployment environment for each artifact when the release is in different statuses. You will still have the option to select a different environment when creating a deployment."
        hasSidebar={true}
        badge={`${activeArtifacts.length} Artifacts`}
      />
      <div className="mt-6" />
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="w-[28%] cursor-pointer select-none text-[11px] font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground"
                onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
              >
                <span className="inline-flex items-center gap-1.5">
                  Name
                  <ArrowUpDown className="size-3.5 text-muted-foreground" />
                </span>
              </TableHead>
              <TableHead className="w-[24%] text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                QA
              </TableHead>
              <TableHead className="w-[24%] text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                STG
              </TableHead>
              <TableHead className="w-[24%] text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                PRD
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.length > 0 ? (
              sorted.map((artifact) => (
                <TableRow key={artifact.id} className="border-b border-border last:border-b-0">
                  <TableCell className="py-3 font-medium">{artifact.name}</TableCell>
                  <TableCell className="py-3">{renderSelect(artifact, "qa")}</TableCell>
                  <TableCell className="py-3">{renderSelect(artifact, "stg")}</TableCell>
                  <TableCell className="py-3">{renderSelect(artifact, "prd")}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No active artifacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
