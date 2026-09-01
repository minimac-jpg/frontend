import { createFileRoute,
  Link, useNavigate, useParams,
} from "@tanstack/react-router";
import {
  Bell,
  BookOpen,
  Bug,
  Building2,
  ChevronDown,
  Code,
  Download,
  GitBranch,
  GitPullRequest,
  Play,
  Search,
  Settings,
  Tags,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ErrorState } from "../components/common/error-state";
import { ProjectSettingsForm } from "../components/projects/project-settings-form";
import { useProjects } from "../hooks/use-projects";
import { cn } from "../lib/utils";

interface Branch {
  name: string;
  isDefault: boolean;
}

const branches: Branch[] = [
  { name: "main", isDefault: true },
  { name: "develop", isDefault: false },
  { name: "feature/new-ui", isDefault: false },
  { name: "feature/auth-flow", isDefault: false },
  { name: "fix/header-styles", isDefault: false },
  { name: "chore/deps-update", isDefault: false },
  { name: "refactor/api-layer", isDefault: false },
  { name: "docs/readme-update", isDefault: false },
  { name: "feature/notifications", isDefault: false },
  { name: "fix/mobile-nav", isDefault: false },
];

const tags: string[] = [
  "v2.0.0",
  "v1.5.0",
  "v1.4.2",
  "v1.4.1",
  "v1.3.0",
  "v1.2.0",
  "v1.1.0",
  "v1.0.0",
  "v0.9.0",
  "v0.8.0",
];

const DISPLAY_LIMIT = 7;

const tabs = [
  { id: "code", label: "Code", icon: BookOpen },
  { id: "issues", label: "Issues", icon: Bug },
  { id: "pulls", label: "Pull Requests", icon: GitPullRequest },
  { id: "builds", label: "Builds", icon: Play },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type TabId = (typeof tabs)[number]["id"];

function ProjectDetailRoute() {
  const { projectName } = useParams({ from: "/projects/$projectName" });
  const navigate = useNavigate();
  const { data, isLoading, isError } = useProjects();
  const project = data?.projects.find((p) => p.name === projectName);
  const [activeTab, setActiveTab] = useState<TabId>("code");
  const [branchTab, setBranchTab] = useState<"branches" | "tags">("branches");

  if (isLoading) {
    return <p className="p-6 text-sm text-muted-foreground">Loading project…</p>;
  }

  if (isError) {
    return <ErrorState message="Failed to load project" />;
  }

  if (!project) {
    return <ErrorState message="Project not found" />;
  }

  return (
    <div className="flex flex-col p-6">
      <div className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{project.name}</span>
          </div>
          <div id="projects-nav" className="flex items-center gap-2">
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search repositories..." className="pl-9 h-9" />
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm">
                    <Bug className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>All Issues</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm">
                    <GitPullRequest className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>All Pull Requests</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm">
                    <Bell className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm">
                    <Settings className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 mt-4">
          <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold tracking-tight">{project.name}</h1>
              <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                Private
              </span>
            </div>
            {project.description && (
              <p className="text-sm text-muted-foreground mt-0.5">{project.description}</p>
            )}
          </div>
        </div>

      </div>

      <div className="border-b">
        <nav className="flex gap-0 -mb-px">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30",
                )}
              >
                <Icon className="size-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="py-6 space-y-4">
        {activeTab === "code" && (
          <>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <GitBranch className="size-4" />
                    main
                    <ChevronDown className="size-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 p-0">
                  <div className="p-2 pb-0">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Find a branch or tag..." className="pl-8 h-8" />
                    </div>
                  </div>
                  <div className="flex border-b px-2 pt-2.5">
                    <button
                      type="button"
                      onClick={() => setBranchTab("branches")}
                      className={cn(
                        "flex-1 pb-2.5 text-sm font-medium text-center border-b-2 transition-colors -mb-0.5",
                        branchTab === "branches"
                          ? "border-foreground text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground",
                      )}
                    >
                      Branches
                    </button>
                    <button
                      type="button"
                      onClick={() => setBranchTab("tags")}
                      className={cn(
                        "flex-1 pb-2.5 text-sm font-medium text-center border-b-2 transition-colors -mb-0.5",
                        branchTab === "tags"
                          ? "border-foreground text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground",
                      )}
                    >
                      Tags
                    </button>
                  </div>
                  <div className="p-1.5 max-h-72 overflow-y-auto">
                    {branchTab === "branches" ? (
                      <>
                        {branches.slice(0, DISPLAY_LIMIT).map((b) => (
                          <DropdownMenuItem key={b.name} className="py-2">
                            <div className="flex items-center justify-between w-full gap-3">
                              <span className="truncate">{b.name}</span>
                              {b.isDefault && (
                                <span className="shrink-0 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">default</span>
                              )}
                            </div>
                          </DropdownMenuItem>
                        ))}
                        {branches.length > DISPLAY_LIMIT && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="justify-center text-primary font-medium gap-2"
                              onClick={() => navigate({ to: "/projects/$projectName/branches", params: { projectName } })}
                            >
                              <GitBranch className="size-4 shrink-0" />
                              <span>View all branches</span>
                            </DropdownMenuItem>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {tags.slice(0, DISPLAY_LIMIT).map((t) => (
                          <DropdownMenuItem key={t} className="py-2">{t}</DropdownMenuItem>
                        ))}
                        {tags.length > DISPLAY_LIMIT && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="justify-center text-primary font-medium gap-2"
                              onClick={() => navigate({ to: "/projects/$projectName/tags", params: { projectName } })}
                            >
                              <Tags className="size-4 shrink-0" />
                              <span>View all tags</span>
                            </DropdownMenuItem>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="sm" className="gap-1.5" onClick={() => navigate({ to: "/projects/$projectName/branches", params: { projectName } })}>
                <GitBranch className="size-4" />
                18 Branches
              </Button>

              <Button variant="ghost" size="sm" className="gap-1.5" onClick={() => navigate({ to: "/projects/$projectName/tags", params: { projectName } })}>
                <Tags className="size-4" />
                20 Tags
              </Button>

              <div className="flex-1" />

              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search code..." className="pl-9 h-9" />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Code className="size-4" />
                    Clone
                    <ChevronDown className="size-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Clone</DropdownMenuLabel>
                  <DropdownMenuItem className="flex-col items-start gap-0.5 py-2">
                    <span className="text-xs text-muted-foreground">HTTPS</span>
                    <span className="font-mono text-xs">https://github.com/user/{project.name}.git</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex-col items-start gap-0.5 py-2">
                    <span className="text-xs text-muted-foreground">SSH</span>
                    <span className="font-mono text-xs">git@github.com:user/{project.name}.git</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2">
                    <Download className="size-4" />
                    Download ZIP
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="rounded-xl border bg-card">
              <div className="border-b px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="size-4" />
                <span className="font-medium text-foreground">README</span>
              </div>
              <div className="px-6 py-8 text-sm text-muted-foreground">
                <h2 className="text-xl font-semibold text-foreground mb-2">{project.name}</h2>
                <p className="mb-4">{project.description || "No description provided."}</p>
                <div className="rounded-lg border border-dashed border-muted-foreground/30 p-6 text-center">
                  <p>Get started by adding a README file to your repository.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "issues" && (
          <div className="rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground">
            <Bug className="size-8 mx-auto mb-3 text-muted-foreground/50" />
            <p className="font-medium text-foreground mb-1">No issues yet</p>
            <p>Issues will appear here once created.</p>
          </div>
        )}

        {activeTab === "pulls" && (
          <div className="rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground">
            <GitPullRequest className="size-8 mx-auto mb-3 text-muted-foreground/50" />
            <p className="font-medium text-foreground mb-1">No pull requests yet</p>
            <p>Pull requests will appear here once created.</p>
          </div>
        )}

        {activeTab === "builds" && (
          <div className="rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground">
            <Play className="size-8 mx-auto mb-3 text-muted-foreground/50" />
            <p className="font-medium text-foreground mb-1">No builds yet</p>
            <p>Builds will appear here once you run a pipeline.</p>
          </div>
        )}

        {activeTab === "settings" && (
          <ProjectSettingsForm project={project} />
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/projects/$projectName/")({

  component: ProjectDetailRoute,
});
