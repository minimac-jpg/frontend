import type { ReactNode } from "react";

interface ErrorStateProps {
  title?: string;
  message: string;
  action?: ReactNode;
}

export function ErrorState({ title = "Error", message, action }: ErrorStateProps) {
  return (
    <div className="error-state" role="alert">
      <h3 className="error-state-title">{title}</h3>
      <p className="error-state-message">{message}</p>
      {action && <div className="error-state-action">{action}</div>}
    </div>
  );
}
