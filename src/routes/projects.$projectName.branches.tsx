import { createFileRoute,
  Link, useParams,
} from "@tanstack/react-router";
import {
  ChevronDown,
  GitBranch,
  GitCommitHorizontal,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Branch {
  name: string;
  isDefault: boolean;
  lastCommit: string;
  updated: string;
}

const branches: Branch[] = [
  { name: "main", isDefault: true, lastCommit: "Merge pull request #42 from feature/new-ui", updated: "2 hours ago" },
  { name: "develop", isDefault: false, lastCommit: "Update API endpoints", updated: "1 day ago" },
  { name: "feature/new-ui", isDefault: false, lastCommit: "Add dashboard layout", updated: "3 days ago" },
  { name: "feature/auth-flow", isDefault: false, lastCommit: "Implement OAuth flow", updated: "5 days ago" },
  { name: "fix/header-styles", isDefault: false, lastCommit: "Fix nav spacing on mobile", updated: "1 week ago" },
  { name: "chore/deps-update", isDefault: false, lastCommit: "Bump dependencies", updated: "1 week ago" },
  { name: "refactor/api-layer", isDefault: false, lastCommit: "Extract API client", updated: "2 weeks ago" },
  { name: "docs/readme-update", isDefault: false, lastCommit: "Update README with setup guide", updated: "2 weeks ago" },
  { name: "feature/notifications", isDefault: false, lastCommit: "Add in-app notification system", updated: "3 weeks ago" },
  { name: "fix/mobile-nav", isDefault: false, lastCommit: "Fix hamburger menu toggle", updated: "3 weeks ago" },
];

function ProjectBranchesRoute() {
  const { projectName } = useParams({ from: "/projects/$projectName/branches" });
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = searchQuery.trim()
    ? branches.filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : branches;

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
          <span className="text-foreground font-medium">Branches</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
            <GitBranch className="size-5 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Branches</h1>
            <p className="text-sm text-muted-foreground">{branches.length} branches</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Find a branch..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm" className="gap-1.5">
          New branch
          <ChevronDown className="size-3" />
        </Button>
      </div>

      <div className="rounded-xl border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-muted-foreground">
              <th className="px-4 py-3 text-left font-medium">Branch</th>
              <th className="px-4 py-3 text-left font-medium">Last commit</th>
              <th className="px-4 py-3 text-right font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((branch) => (
              <tr key={branch.name} className="border-b last:border-0 hover:bg-gray-200/90">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="size-4 text-muted-foreground shrink-0" />
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-primary">{branch.name}</span>
                      {branch.isDefault && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">default</span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GitCommitHorizontal className="size-3.5 shrink-0" />
                    <span className="truncate max-w-md">{branch.lastCommit}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-muted-foreground whitespace-nowrap">
                  {branch.updated}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-12 text-center text-sm text-muted-foreground">
                  No branches found matching &ldquo;{searchQuery}&rdquo;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/projects/$projectName/branches")({

  component: ProjectBranchesRoute,
});
