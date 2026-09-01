import type { EventCategory } from "../types";

interface CalendarLegendProps {
  categories: EventCategory[];
}

export function CalendarLegend({ categories }: CalendarLegendProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories.map((cat) => (
        <div key={cat.value} className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span
            className="inline-block size-2 rounded-full"
            style={{ backgroundColor: cat.color }}
          />
          <span>{cat.label}</span>
        </div>
      ))}
    </div>
  );
}
