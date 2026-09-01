import { useState, useCallback } from "react";
import { Bold, Italic, Heading1, List, ListOrdered, Link, PencilLine, Save, Eye } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function renderMarkdown(text: string): string {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  html = html
    .replace(/^### (.+)$/gm, "<h3 class='text-lg font-semibold mt-4 mb-1'>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class='text-xl font-semibold mt-5 mb-2'>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1 class='text-2xl font-semibold mt-6 mb-2'>$1</h1>");

  html = html
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='rounded bg-muted px-1 py-0.5 text-xs font-mono'>$1</code>");

  html = html
    .replace(/^- (.+)$/gm, "<li class='ml-5 list-disc text-sm'>$1</li>")
    .replace(/^\d+\. (.+)$/gm, "<li class='ml-5 list-decimal text-sm'>$1</li>");

  html = html
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'>$1</a>");

  html = html.replace(/\n\n/g, "</p><p class='text-sm'>").replace(/\n/g, "<br />");
  html = `<p class='text-sm'>${html}</p>`;

  return html;
}

const toolbarItems = [
  { label: "Bold", icon: Bold, prefix: "**", suffix: "**" },
  { label: "Italic", icon: Italic, prefix: "*", suffix: "*" },
  { label: "Heading", icon: Heading1, prefix: "## ", suffix: "" },
  { label: "Bullet List", icon: List, prefix: "- ", suffix: "" },
  { label: "Numbered List", icon: ListOrdered, prefix: "1. ", suffix: "" },
  { label: "Link", icon: Link, prefix: "[", suffix: "](url)" },
];

interface ReleaseInformationTabProps {
  initialContent?: string;
}

export function ReleaseInformationTab({ initialContent = "" }: ReleaseInformationTabProps) {
  const [content, setContent] = useState(initialContent);
  const [editing, setEditing] = useState(false);
  const [editorTab, setEditorTab] = useState<"write" | "preview">("write");

  const insertMarkdown = useCallback(
    (prefix: string, suffix: string) => {
      const textarea = document.querySelector("#release-notes-textarea") as HTMLTextAreaElement | null;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = content.slice(start, end);
      const before = content.slice(0, start);
      const after = content.slice(end);
      const inserted = prefix + selected + suffix;
      setContent(before + inserted + after);
      requestAnimationFrame(() => {
        textarea.focus();
        textarea.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
      });
    },
    [content],
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Release Information</h3>
        {editing ? (
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Save className="size-3.5" />
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <PencilLine className="size-3.5" />
            Edit
          </button>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 max-w-3xl">
        Add release notes, known issues, and any other information relevant to this release. Markdown formatting is supported.
      </p>

      {!editing ? (
        <div className="min-h-[280px] rounded-lg border border-border bg-card p-4">
          {content ? (
            <div
              className="prose prose-sm max-w-none dark:prose-invert"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown preview
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          ) : (
            <p className="text-sm text-muted-foreground">Nothing to preview yet.</p>
          )}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-muted/50">
            <div className="flex items-center gap-0.5 px-2 py-1.5">
              {toolbarItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  title={item.label}
                  onClick={() => insertMarkdown(item.prefix, item.suffix)}
                  className="inline-flex items-center justify-center size-7 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  <item.icon className="size-3.5" />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-0.5 px-2 py-1.5">
              <button
                type="button"
                onClick={() => setEditorTab("write")}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                  editorTab === "write"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <PencilLine className="size-3" />
                Write
              </button>
              <button
                type="button"
                onClick={() => setEditorTab("preview")}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                  editorTab === "preview"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Eye className="size-3" />
                Preview
              </button>
            </div>
          </div>
          {editorTab === "write" ? (
            <Textarea
              id="release-notes-textarea"
              placeholder="Write your release notes in markdown..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[280px] rounded-none border-0 resize-y focus-visible:ring-0"
            />
          ) : (
            <div className="min-h-[280px] p-4">
              {content ? (
                <div
                  className="prose prose-sm max-w-none dark:prose-invert"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown preview
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
                />
              ) : (
                <p className="text-sm text-muted-foreground">Nothing to preview yet.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
