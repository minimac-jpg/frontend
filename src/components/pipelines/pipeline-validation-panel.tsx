import { Badge } from "../common/badge";

interface ValidationMessage {
  level: "error" | "warning" | "info";
  message: string;
  line?: number;
  column?: number;
}

interface PipelineValidationPanelProps {
  isValidating: boolean;
  errors: ValidationMessage[];
  isValid: boolean | null;
}

export function PipelineValidationPanel({
  isValidating,
  errors,
  isValid,
}: PipelineValidationPanelProps) {
  if (isValidating) {
    return (
      <div className="validation-panel">
        <p className="validation-panel-status">Validating...</p>
      </div>
    );
  }

  if (isValid === null) {
    return (
      <div className="validation-panel">
        <p className="validation-panel-status">Click Validate to check your pipeline.</p>
      </div>
    );
  }

  if (isValid && errors.length === 0) {
    return (
      <div className="validation-panel">
        <Badge variant="success">Valid</Badge>
        <p className="validation-panel-status">Pipeline definition is valid.</p>
      </div>
    );
  }

  return (
    <div className="validation-panel">
      <Badge variant={isValid ? "success" : "error"}>{isValid ? "Valid" : "Invalid"}</Badge>
      {errors.length > 0 && (
        <ul className="validation-panel-errors">
          {errors.map((err, i) => (
            <li key={i} className="validation-panel-error">
              <Badge variant={err.level === "error" ? "error" : "warning"}>{err.level}</Badge>
              <span className="validation-panel-message">{err.message}</span>
              {err.line !== undefined && (
                <span className="validation-panel-location">
                  Line {err.line}
                  {err.column !== undefined ? `:${err.column}` : ""}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
