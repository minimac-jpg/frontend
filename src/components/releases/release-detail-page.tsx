import { useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Release, ReleaseChecklist } from "@/types/release";
import {
  useApproveRelease,
  useCancelRelease,
  usePublishRelease,
  useRelease,
  useReleaseArtifacts,
  useSubmitRelease,
} from "@/hooks/use-releases";
import { StatusBadge } from "./status-badge";
import { ReleaseArtifactsTable } from "./release-artifacts-table";
import { DeployEnvTab } from "./releases-detail-deploy-env-tab";
import { ReleaseChecklistTab } from "./release-detail-checklist";
import { ReleaseInformationTab } from "./release-detail-information";
import { DatabaseTab } from "./release-detail-database";
import { DeploymentsTab } from "./release-detail-deployments";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

const tabs = [
  { id: "artifacts", label: "Artifacts" },
  { id: "deployments", label: "Deployments" },
  { id: "deployment-environments", label: "Deployment Environments" },
  { id: "database", label: "Database" },
  { id: "release-checklist", label: "Release Checklist" },
  { id: "release-information", label: "Release Information" },
] as const;

type TabId = (typeof tabs)[number]["id"];

interface Toast {
  id: number;
  message: string;
  variant?: "success" | "destructive" | "default";
}

function formatDate(value: string | null): string {
  if (!value) return "\u2014";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "\u2014";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface ReleaseDetailPageProps {
  releaseId: string;
  fallback: Release;
}

export function ReleaseDetailPage({ releaseId, fallback }: ReleaseDetailPageProps) {
  const [activeTab, setActiveTab] = useState<TabId>("artifacts");
  const [checklist, setChecklist] = useState<ReleaseChecklist[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const { data, isLoading } = useRelease(releaseId);
  const release = data?.release ?? fallback;
  const { data: artifacts = [], isLoading: artifactsLoading } = useReleaseArtifacts(
    releaseId,
    release.version,
  );

  const submitRelease = useSubmitRelease();
  const approveRelease = useApproveRelease();
  const publishRelease = usePublishRelease();
  const cancelRelease = useCancelRelease();

  const showToast = useCallback(
    (message: string, variant?: "success" | "destructive") => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, variant }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    [],
  );

  async function runLifecycleAction(
    mutation: { mutateAsync: (id: string) => Promise<unknown> },
    action: "submit" | "approve" | "publish" | "cancel",
  ) {
    try {
      await mutation.mutateAsync(release.id);
      showToast(
        action === "submit"
          ? "Release submitted for approval"
          : action === "approve"
            ? "Release approved"
            : action === "publish"
              ? "Release published"
              : "Release cancelled",
        "success",
      );
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Action failed", "destructive");
    }
  }

  const lifecycleActions: { label: string; action: "submit" | "approve" | "publish" | "cancel"; mutation: { mutateAsync: (id: string) => Promise<unknown> } }[] = [];
  if (release.status === "draft") {
    lifecycleActions.push({ label: "Submit for approval", action: "submit", mutation: submitRelease });
  }
  if (release.status === "pending_approval") {
    lifecycleActions.push({ label: "Approve", action: "approve", mutation: approveRelease });
  }
  if (release.status === "approved") {
    lifecycleActions.push({ label: "Publish", action: "publish", mutation: publishRelease });
  }
  if (release.status === "draft" || release.status === "pending_approval" || release.status === "approved") {
    lifecycleActions.push({ label: "Cancel release", action: "cancel", mutation: cancelRelease });
  }

  function handleChecklistChange(
    index: number,
    value: "yes" | "no" | null,
  ) {
    setChecklist((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        if (value === null) {
          return {
            ...item,
            itemValue: null,
            signOffBy: null,
            signOffAt: null,
            updatedBy: null,
            updatedAt: null,
          };
        }
        const todayStr = new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        return {
          ...item,
          itemValue: value,
          signOffBy: "You",
          signOffAt: todayStr,
          updatedBy: "You",
          updatedAt: todayStr,
        };
      }),
    );
  }

  const activeArtifacts = artifacts.filter((a) => !a.isRemoved);
  const deployedCount = activeArtifacts.filter(
    (a) => a.deployedAt !== null,
  ).length;
  const totalActive = activeArtifacts.length;
  const artifactsPct = totalActive
    ? Math.round((deployedCount / totalActive) * 100)
    : 0;

  const signedOffCount = checklist.filter(
    (c) => c.itemValue === "yes",
  ).length;
  const totalChecklist = checklist.length;
  const checklistPct = totalChecklist
    ? Math.round((signedOffCount / totalChecklist) * 100)
    : 0;

  const notDeployedCount = totalActive - deployedCount;
  const unsignedCount = checklist.filter(
    (c) => c.itemValue !== "yes",
  ).length;
  const outstandingTotal = notDeployedCount + unsignedCount;

  const anyPending = submitRelease.isPending || approveRelease.isPending || publishRelease.isPending || cancelRelease.isPending;

  if (isLoading && !data) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
        <p className="text-sm">Loading release…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <Link
        to="/releases"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to Releases
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h1 className="text-2xl font-semibold tracking-tight">
              {release.name}
            </h1>
            <StatusBadge status={release.status} />
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-2.5 max-w-4xl">
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                Version
              </span>
              <span className="text-sm">{release.version}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                Kind
              </span>
              <span className="text-sm">
                {release.kind ? release.kind.replace(/_/g, " ") : "\u2014"}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                Project
              </span>
              <span className="text-sm">{release.projectName ?? release.projectId}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                Created
              </span>
              <span className="text-sm">{formatDate(release.createdAt)}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                Published
              </span>
              <span className="text-sm">{formatDate(release.publishedAt)}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                Target
              </span>
              <span className="text-sm">
                {release.target.channel
                  ? release.target.channel.type + (release.target.channel.value ? ` (${release.target.channel.value})` : "")
                  : release.target.environment_id
                    ? release.target.environment_id
                    : "\u2014"}
              </span>
            </div>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <Popover>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Settings className="size-4" />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent side="left">Settings</TooltipContent>
              <PopoverContent align="end" className="w-48 p-1.5">
                <div className="flex flex-col gap-1">
                  {lifecycleActions.map((item) => (
                    <button
                      key={item.action}
                      type="button"
                      disabled={anyPending}
                      className="w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                      onClick={() => runLifecycleAction(item.mutation, item.action)}
                    >
                      {item.label}
                    </button>
                  ))}
                  {lifecycleActions.length > 0 && <DropdownMenuSeparator />}
                  <button
                    type="button"
                    className="w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => showToast("Opening linked Teams channel\u2026")}
                  >
                    Teams Channel
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => showToast("Opening SDLC branch details\u2026")}
                  >
                    SDLC Branch
                  </button>
                  <DropdownMenuSeparator />
                  <button
                    type="button"
                    className="w-full rounded-sm px-2 py-1.5 text-left text-sm text-destructive hover:bg-destructive/10"
                  >
                    Delete Release
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Health strip */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
            Artifacts Deployed
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight">
              {deployedCount} / {totalActive}
            </span>
          </div>
          <div className="mt-2.5 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${artifactsPct}%` }}
            />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
            Checklist Signed Off
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight">
              {signedOffCount} / {totalChecklist}
            </span>
          </div>
          <div className="mt-2.5 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-300"
              style={{ width: `${checklistPct}%` }}
            />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
            Items Outstanding
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight">
              {outstandingTotal}
            </span>
            <span className="text-[13px] text-muted-foreground">
              not deployed or unsigned
            </span>
          </div>
          <p className="mt-2.5 text-[12.5px] text-muted-foreground">
            {notDeployedCount} artifact
            {notDeployedCount === 1 ? "" : "s"} not deployed \u00b7{" "}
            {unsignedCount} checklist item
            {unsignedCount === 1 ? "" : "s"} unsigned
          </p>
        </div>
      </div>

      {/* Tab navigation */}
      <div
        className="flex items-center gap-6 border-b border-border overflow-x-auto"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative pb-3 text-sm font-medium whitespace-nowrap transition-colors",
              activeTab === tab.id
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute left-0 right-0 bottom-[-1px] h-0.5 bg-foreground rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {activeTab === "artifacts" &&
        (artifactsLoading ? (
          <div className="py-12 text-center text-muted-foreground">Loading artifacts…</div>
        ) : (
          <ReleaseArtifactsTable data={artifacts} />
        ))}

      {activeTab === "deployments" && <DeploymentsTab releaseName={release.name} />}

      {activeTab === "deployment-environments" && (
        <DeployEnvTab artifacts={artifacts} />
      )}

      {activeTab === "database" && <DatabaseTab releaseName={release.name} />}

      {activeTab === "release-checklist" && (
        <ReleaseChecklistTab
          checklist={checklist}
          onChecklistChange={handleChecklistChange}
          onShowToast={showToast}
        />
      )}

      {activeTab === "release-information" && (
        <ReleaseInformationTab
          initialContent={
            release.notes.length > 0
              ? release.notes.map((note) => note.body).join("\n\n")
              : ""
          }
        />
      )}

      {/* Toast container */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => {
          const variantCls =
            toast.variant === "destructive"
              ? "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"
              : toast.variant === "success"
                ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400"
                : "border-border bg-card text-foreground";
          return (
            <div
              key={toast.id}
              className={cn(
                "flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] font-medium shadow-md transition-all duration-200",
                variantCls,
              )}
              style={{ maxWidth: "320px" }}
            >
              {toast.message}
            </div>
          );
        })}
      </div>
    </div>
  );
}
