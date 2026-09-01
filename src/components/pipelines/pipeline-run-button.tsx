import { useRunPipeline } from "../../hooks/use-pipelines";
import { Button } from "../common/button";

interface PipelineRunButtonProps {
  pipelineId: string;
}

export function PipelineRunButton({ pipelineId }: PipelineRunButtonProps) {
  const { mutateAsync: runPipeline, isPending, isSuccess, error } = useRunPipeline();

  const handleRun = async () => {
    try {
      await runPipeline(pipelineId);
    } catch {
      // error captured in mutation
    }
  };

  return (
    <div className="pipeline-run-button">
      <Button variant="primary" onClick={handleRun} disabled={isPending}>
        {isPending ? "Starting..." : "Run Pipeline"}
      </Button>
      {isSuccess && <span className="pipeline-run-success">Build started</span>}
      {error && <span className="pipeline-run-error">{error.message}</span>}
    </div>
  );
}
