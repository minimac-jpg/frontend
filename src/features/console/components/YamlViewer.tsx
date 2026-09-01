import { useMemo } from "react";

interface YamlViewerProps {
  obj: Record<string, unknown>;
  className?: string;
}

function formatYaml(obj: Record<string, unknown>, indent = 0): string {
  const prefix = "  ".repeat(indent);
  const lines: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      lines.push(`${prefix}${key}: null`);
    } else if (typeof value === "string") {
      if (value.includes("\n") || value.length > 80) {
        lines.push(`${prefix}${key}: |`);
        for (const line of value.split("\n")) {
          lines.push(`${prefix}  ${line}`);
        }
      } else {
        lines.push(`${prefix}${key}: ${value}`);
      }
    } else if (typeof value === "number" || typeof value === "boolean") {
      lines.push(`${prefix}${key}: ${value}`);
    } else if (Array.isArray(value)) {
      lines.push(`${prefix}${key}:`);
      for (const item of value) {
        if (typeof item === "object" && item !== null) {
          lines.push(`${prefix}-`);
          for (const [k, v] of Object.entries(item as Record<string, unknown>)) {
            lines.push(formatYaml({ [k]: v }, indent + 2));
          }
        } else {
          lines.push(`${prefix}- ${String(item)}`);
        }
      }
    } else if (typeof value === "object") {
      lines.push(`${prefix}${key}:`);
      lines.push(formatYaml(value as Record<string, unknown>, indent + 1));
    }
  }

  return lines.join("\n");
}

export function YamlViewer({ obj, className }: YamlViewerProps) {
  const yaml = useMemo(() => formatYaml(obj), [obj]);

  return (
    <pre className={`overflow-auto rounded-md bg-muted p-4 text-xs leading-relaxed ${className ?? ""}`}>
      <code>{yaml}</code>
    </pre>
  );
}
