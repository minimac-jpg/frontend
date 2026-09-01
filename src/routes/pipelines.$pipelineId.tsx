import { createFileRoute,
  useParams,
} from "@tanstack/react-router";
import { useState } from "react";
import { ErrorState } from "../components/common/error-state";
import { LoadingState } from "../components/common/loading-state";
import { PageShell } from "../components/layout/page-shell";
import { PipelineEditor } from "../components/pipelines/pipeline-editor";
import { PipelineGraph } from "../components/pipelines/pipeline-graph";
import { PipelineRunButton } from "../components/pipelines/pipeline-run-button";
import { PipelineValidationPanel } from "../components/pipelines/pipeline-validation-panel";
import { useCompilePipeline, usePipeline, useValidatePipeline } from "../hooks/use-pipelines";

interface ValidationMessage {
  level: "error" | "warning" | "info";
  message: string;
  line?: number;
  column?: number;
}

function PipelineDetailRoute() {
  const { pipelineId } = useParams({ from: "/pipelines/$pipelineId" });
  const { data: pipeline, isLoading, error } = usePipeline(pipelineId);
  const { mutateAsync: validate, isPending: isValidating } = useValidatePipeline();
  const { mutateAsync: compile, isPending: isCompiling } = useCompilePipeline();

  const [validationResult, setValidationResult] = useState<{
    isValid: boolean | null;
    errors: ValidationMessage[];
  }>({ isValid: null, errors: [] });

  const handleValidate = async (source: string) => {
    try {
      const result = await validate({ file: source });
      setValidationResult({
        isValid: result.valid,
        errors: result.errors.map((msg) => ({
          level: "error" as const,
          message: msg,
        })),
      });
    } catch (err) {
      setValidationResult({
        isValid: false,
        errors: [
          {
            level: "error",
            message: err instanceof Error ? err.message : "Validation failed",
          },
        ],
      });
    }
  };

  const handleCompile = async (_source: string) => {
    try {
      await compile(pipelineId);
      // On success, re-fetch pipeline to get updated graph
    } catch {
      // error handled by mutation
    }
  };

  if (isLoading) {
    return (
      <PageShell title="Pipeline">
        <LoadingState message="Loading pipeline..." />
      </PageShell>
    );
  }

  if (error) {
    return (
      <PageShell title="Pipeline">
        <ErrorState message={error.message} />
      </PageShell>
    );
  }

  if (!pipeline) {
    return (
      <PageShell title="Pipeline">
        <ErrorState message="Pipeline not found" />
      </PageShell>
    );
  }

  return (
    <PageShell title={pipeline.name} subtitle={`Project: ${pipeline.projectId}`}>
      <div className="pipeline-detail">
        <div className="pipeline-detail-main">
          <PipelineEditor initialSource="" onValidate={handleValidate} onCompile={handleCompile} />
          <PipelineValidationPanel
            isValidating={isValidating || isCompiling}
            errors={validationResult.errors}
            isValid={validationResult.isValid}
          />
        </div>
        <div className="pipeline-detail-sidebar">
          <PipelineGraph nodes={[]} edges={[]} />
          <PipelineRunButton pipelineId={pipelineId} />
        </div>
      </div>
    </PageShell>
  );
}

export const Route = createFileRoute("/pipelines/$pipelineId")({

  component: PipelineDetailRoute,
});
