import { createFileRoute,
  Link, useParams,
} from "@tanstack/react-router";
import { Search, Tags, GitCommitHorizontal, Clock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface Tag {
  name: string;
  commit: string;
  date: string;
}

const tags: Tag[] = [
  { name: "v2.0.0", commit: "a1b2c3d", date: "2025-06-15" },
  { name: "v1.5.0", commit: "e4f5g6h", date: "2025-05-01" },
  { name: "v1.4.2", commit: "i7j8k9l", date: "2025-04-10" },
  { name: "v1.4.1", commit: "m0n1o2p", date: "2025-03-28" },
  { name: "v1.3.0", commit: "q3r4s5t", date: "2025-03-01" },
  { name: "v1.2.0", commit: "u6v7w8x", date: "2025-02-10" },
  { name: "v1.1.0", commit: "y9z0a1b", date: "2025-01-20" },
  { name: "v1.0.0", commit: "c2d3e4f", date: "2025-01-01" },
  { name: "v0.9.0", commit: "g5h6i7j", date: "2024-12-15" },
  { name: "v0.8.0", commit: "k8l9m0n", date: "2024-11-20" },
];

function ProjectTagsRoute() {
  const { projectName } = useParams({ from: "/projects/$projectName/tags" });
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = searchQuery.trim()
    ? tags.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : tags;

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="border-b">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <span>/</span>
          <Link to={"/projects/$projectName"} params={{ projectName }} className="hover:text-foreground transition-colors">
            {projectName}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Tags</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
            <Tags className="size-5 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Tags</h1>
            <p className="text-sm text-muted-foreground">{tags.length} tags</p>
          </div>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Find a tag..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="rounded-xl border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-muted-foreground">
              <th className="px-4 py-3 text-left font-medium">Tag</th>
              <th className="px-4 py-3 text-left font-medium">Commit</th>
              <th className="px-4 py-3 text-right font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tag) => (
              <tr key={tag.name} className="border-b last:border-0 hover:bg-gray-200/90">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Tags className="size-4 text-muted-foreground shrink-0" />
                    <span className="font-medium text-primary">{tag.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GitCommitHorizontal className="size-3.5 shrink-0" />
                    <code className="text-xs">{tag.commit}</code>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-muted-foreground whitespace-nowrap">
                  <div className="flex items-center gap-1.5 justify-end">
                    <Clock className="size-3.5" />
                    {tag.date}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-12 text-center text-sm text-muted-foreground">
                  No tags found matching &ldquo;{searchQuery}&rdquo;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/projects/$projectName/tags")({

  component: ProjectTagsRoute,
});
