"use client";

import { Link, useNavigate } from "@tanstack/react-router";
import {
  Bell,
  Bug,
  ExternalLink,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { useProjects, useCreateProject } from "@/hooks/use-projects";
import type { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { formatDistanceToNow } from "date-fns";

function formatUpdated(iso: string): string {
  try {
    return formatDistanceToNow(new Date(iso), { addSuffix: true });
  } catch {
    return iso;
  }
}

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { data, isLoading, isError, error } = useProjects();
  const createProject = useCreateProject();
  const navigate = useNavigate();

  const projects = data?.projects ?? [];

  const filtered = searchQuery.trim()
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.description ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.owner.display_name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  const showAll = !searchQuery.trim();

  const handleCreate = async () => {
    if (!name.trim()) return;
    try {
      const project = await createProject.mutateAsync({
        name: name.trim(),
        description: description.trim() || undefined,
      });
      setOpen(false);
      setName("");
      setDescription("");
      navigate({ to: "/projects/$projectName", params: { projectName: project.name } });
    } catch {
      // error surfaced via createProject.error
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your projects and repositories
        </p>
      </div>
      <div id="projects-nav" className="flex items-center gap-3 border-b pb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4" />
              Create Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create Project</DialogTitle>
              <DialogDescription>Set up a new project in your workspace.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="project-name">
                  Project Name
                </label>
                <Input
                  id="project-name"
                  placeholder="my-awesome-project"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="project-desc">
                  Description
                </label>
                <Input
                  id="project-desc"
                  placeholder="A short description of your project"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            {createProject.error && (
              <div
                className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                {createProject.error.message}
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreate} disabled={!name.trim() || createProject.isPending}>
                {createProject.isPending ? "Creating..." : "Create"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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

      {isLoading && <p className="text-sm text-muted-foreground">Loading projects…</p>}
      {isError && (
        <p className="text-sm text-destructive" role="alert">
          Failed to load projects{error instanceof Error ? `: ${error.message}` : ""}
        </p>
      )}

      {searchQuery.trim() && (
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-3">
            Search results for &ldquo;{searchQuery}&rdquo;
          </h2>
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">No projects found.</p>
          ) : (
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="px-4 py-3 text-left font-medium">Name</th>
                    <th className="px-4 py-3 text-left font-medium">Description</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                    <th className="px-4 py-3 text-left font-medium">Owner</th>
                    <th className="px-4 py-3 text-right font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((project) => (
                    <ProjectRow key={project.id} project={project} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {showAll && !isLoading && !isError && (
        <section>
          <h2 className="text-sm font-semibold mb-3">All projects</h2>
          {projects.length === 0 ? (
            <div className="rounded-xl border border-dashed border-muted-foreground/30 p-12 text-center text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">No projects yet</p>
              <p>Create your first project to get started.</p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to="/projects/$projectName"
                  params={{ projectName: project.name }}
                  className="rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div className="flex items-start justify-between">
                    <p className="font-medium text-sm text-primary">{project.name}</p>
                    <span className="inline-block rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium shrink-0">
                      {project.status}
                    </span>
                  </div>
                  {project.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">{project.description}</p>
                  )}
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span>{project.owner.display_name}</span>
                    <span>Updated {formatUpdated(project.updatedAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <tr className="border-b last:border-0 hover:bg-gray-200/90 cursor-pointer">
      <td className="px-4 py-3">
        <Link
          to="/projects/$projectName"
          params={{ projectName: project.name }}
          className="flex items-center gap-2"
        >
          <span className="font-medium text-primary">{project.name}</span>
          <ExternalLink className="size-3 text-muted-foreground" />
        </Link>
      </td>
      <td className="px-4 py-3 text-muted-foreground">{project.description ?? "—"}</td>
      <td className="px-4 py-3">
        <span className="inline-block rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
          {project.status}
        </span>
      </td>
      <td className="px-4 py-3 text-muted-foreground">{project.owner.display_name}</td>
      <td className="px-4 py-3 text-right text-muted-foreground">
        {formatUpdated(project.updatedAt)}
      </td>
    </tr>
  );
}
