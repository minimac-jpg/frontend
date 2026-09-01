import type { ReactNode } from "react";

interface PageShellProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function PageShell({ title, subtitle, actions, children }: PageShellProps) {
  return (
    <div className="page-shell">
      <div className="page-shell-header">
        <div className="page-shell-title-group">
          <h1 className="page-shell-title">{title}</h1>
          {subtitle && <p className="page-shell-subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="page-shell-actions">{actions}</div>}
      </div>
      <div className="page-shell-body">{children}</div>
    </div>
  );
}
