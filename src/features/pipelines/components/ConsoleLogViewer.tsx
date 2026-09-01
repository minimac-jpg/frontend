import { ArrowDownToLineIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { LogLine } from "../api/types";

interface ConsoleLogViewerProps {
  data: LogLine[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function ConsoleLogViewer({ data, isLoading, error }: ConsoleLogViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
    setAutoScroll(isAtBottom);
  }, []);

  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [data, autoScroll]);

  if (error) {
    return (
      <div
        className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
        role="alert"
      >
        <p className="font-medium">Failed to load console log</p>
        <p className="mt-1 text-destructive/80">{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">
        No console output available.
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="max-h-[60vh] overflow-auto rounded-lg border bg-black/5 p-4 font-mono text-xs leading-relaxed dark:bg-white/5"
      >
        {data.map((line) => (
          <div
            key={line.lineNumber}
            className={cn(
              "whitespace-pre-wrap break-all hover:bg-black/5 dark:hover:bg-white/5",
              line.stream === "stderr" && "text-red-500 dark:text-red-400",
            )}
          >
            <span className="mr-4 select-none text-muted-foreground/40">
              {String(line.lineNumber).padStart(4, " ")}
            </span>
            {line.content}
          </div>
        ))}
      </div>
      {!autoScroll && (
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-3 right-3"
          onClick={() => {
            setAutoScroll(true);
            containerRef.current?.scrollTo({
              top: containerRef.current.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          <ArrowDownToLineIcon className="mr-1 size-3.5" />
          Scroll to bottom
        </Button>
      )}
    </div>
  );
}
