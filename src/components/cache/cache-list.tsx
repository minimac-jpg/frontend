import { useCacheEntries } from "../../hooks/use-cache";
import { EmptyState } from "../common/empty-state";
import { ErrorState } from "../common/error-state";
import { LoadingState } from "../common/loading-state";
import { CacheCard } from "./cache-card";

export function CacheList() {
  const { data, isLoading, error } = useCacheEntries();

  if (isLoading) {
    return <LoadingState message="Loading cache entries..." />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (!data || data.items.length === 0) {
    return (
      <EmptyState
        title="No cache entries"
        description="Cache entries will appear here after builds use caching."
      />
    );
  }

  return (
    <div className="cache-list">
      <div className="cache-list-header">
        <span className="cache-list-count">
          {data.total} cache {data.total !== 1 ? "entries" : "entry"}
        </span>
      </div>
      {data.items.map((entry) => (
        <CacheCard key={entry.cache_id} entry={entry} />
      ))}
    </div>
  );
}
