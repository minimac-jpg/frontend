import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Checksum } from "../api/types";

interface ChecksumBlockProps {
  checksums: Checksum;
}

function CopyableField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-1">
      <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
      <dd className="flex items-center gap-1.5">
        <code className="flex-1 truncate rounded bg-muted px-2 py-1 text-xs font-mono text-foreground">
          {value}
        </code>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-xs" onClick={copy} className="shrink-0">
                {copied ? (
                  <CheckIcon className="size-3 text-emerald-500" />
                ) : (
                  <CopyIcon className="size-3" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">{copied ? "Copied!" : "Copy to clipboard"}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </dd>
    </div>
  );
}

export function ChecksumBlock({ checksums }: ChecksumBlockProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-foreground">Checksums</h4>
      <dl className="space-y-2">
        <CopyableField label="SHA-256" value={checksums.sha256} />
        <CopyableField label="SHA-1" value={checksums.sha1} />
        <CopyableField label="MD5" value={checksums.md5} />
      </dl>
    </div>
  );
}
