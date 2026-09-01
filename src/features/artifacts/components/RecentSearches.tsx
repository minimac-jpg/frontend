import { ClockIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecentSearches } from "../api/queries";

interface RecentSearchesProps {
  onSelect: (query: string) => void;
}

export function RecentSearches({ onSelect }: RecentSearchesProps) {
  const { data, isLoading } = useRecentSearches();

  if (isLoading) {
    return (
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Recent Searches</h3>
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-8 w-5/6" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="mb-2 text-sm font-medium text-foreground">Recent Searches</h3>
      <ul className="space-y-1">
        {data.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onSelect(s.query)}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs text-muted-foreground hover:bg-gray-200/90 hover:text-foreground transition-colors text-left cursor-pointer"
            >
              <ClockIcon className="size-3 shrink-0" />
              <span className="truncate">
                {s.query || (s.filters.formats?.join(", ") ?? "all formats")}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
