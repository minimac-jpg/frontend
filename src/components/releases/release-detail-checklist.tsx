import type { ReactNode } from "react";
import { Check, X, Clock } from "lucide-react";
import type { ReleaseChecklist } from "@/types/release";
import { PageTitle } from "../common/page-title";

interface ReleaseChecklistTabProps {
  checklist: ReleaseChecklist[];
  onChecklistChange: (index: number, value: "yes" | "no" | null) => void;
  onShowToast: (message: string, variant?: "success" | "destructive") => void;
}

export function ReleaseChecklistTab({
  checklist,
  onChecklistChange,
  onShowToast,
}: ReleaseChecklistTabProps) {
  const signedOffCount = checklist.filter((c) => c.itemValue === "yes").length;
  const totalCount = checklist.length;
  return (
    <div>
      <PageTitle
        title="Release Checklist"
        subtitle="Track sign-off status for each checklist item required before this release can ship. Select Yes or No to record a sign-off, or clear an item to reset it."
        badge={`${signedOffCount} of ${totalCount} Signed Off`}
        hasSidebar={true}
      />
      <div className="mt-6" />
      <div className="flex flex-col gap-2">
        {checklist.map((item, i) => {
          const yesChecked = item.itemValue === "yes";
          const noChecked = item.itemValue === "no";

          let statusIcon: ReactNode;
          if (item.itemValue === "yes") {
            statusIcon = (
              <span className="flex items-center justify-center size-7 rounded-full bg-green-100 text-green-700 shrink-0 dark:bg-green-900/30 dark:text-green-400">
                <Check className="size-4" />
              </span>
            );
          } else if (item.itemValue === "no") {
            statusIcon = (
              <span className="flex items-center justify-center size-7 rounded-full bg-red-100 text-red-700 shrink-0 dark:bg-red-900/30 dark:text-red-400">
                <X className="size-4" />
              </span>
            );
          } else {
            statusIcon = (
              <span className="flex items-center justify-center size-7 rounded-full bg-secondary text-muted-foreground shrink-0">
                <Clock className="size-3.5" />
              </span>
            );
          }

          let metaLine: ReactNode;
          if (item.signOffBy) {
            metaLine = (
              <>
                Signed off by{" "}
                <span className="text-foreground font-medium">
                  {item.signOffBy}
                </span>{" "}
                on {item.signOffAt}
                {item.updatedBy &&
                  item.updatedAt &&
                  (item.updatedBy !== item.signOffBy ||
                    item.updatedAt !== item.signOffAt) && (
                    <>
                      {" "}\u00b7 updated by{" "}
                      <span className="text-foreground font-medium">
                        {item.updatedBy}
                      </span>{" "}
                      on {item.updatedAt}
                    </>
                  )}
              </>
            );
          } else {
            metaLine = "Not yet signed off";
          }

          return (
            <div
              key={item.itemName}
              className="rounded-lg border border-border bg-card px-4 py-3.5"
            >
              <div className="flex items-center gap-3.5">
                {statusIcon}
                <div className="flex-1 min-w-0">
                  <p className="font-medium leading-tight">
                    {item.itemName}
                  </p>
                  <p className="text-[12.5px] text-muted-foreground mt-0.5">
                    {metaLine}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <label className="flex items-center gap-1.5 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name={`checklist-${item.itemName}`}
                      className="checklist-radio size-3.5 accent-primary"
                      checked={yesChecked}
                      onChange={() => {
                        onChecklistChange(i, "yes");
                        onShowToast(`${item.itemName} marked Yes`, "success");
                      }}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-1.5 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name={`checklist-${item.itemName}`}
                      className="checklist-radio size-3.5 accent-primary"
                      checked={noChecked}
                      onChange={() => {
                        onChecklistChange(i, "no");
                        onShowToast(`${item.itemName} marked No`, "destructive");
                      }}
                    />
                    <span>No</span>
                  </label>
                  <button
                    type="button"
                    className="text-[12.5px] text-muted-foreground underline decoration-border hover:text-foreground transition-colors"
                    onClick={() => {
                      onChecklistChange(i, null);
                      onShowToast(`${item.itemName} cleared`);
                    }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
