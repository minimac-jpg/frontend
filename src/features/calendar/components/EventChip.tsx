import { calendarService } from "../hooks/calendar-service";
import type { CalendarEvent } from "../types";
import { formatEventTime } from "../utils/dateHelpers";

interface EventChipProps {
  event: CalendarEvent;
  onClick: (event: CalendarEvent) => void;
}

function getCategoryColor(value: string): string {
  const categories = calendarService.getCategories();
  const found = categories.find((c) => c.value === value);
  return found?.color ?? "#6b7280";
}

export function EventChip({ event, onClick }: EventChipProps) {
  const color = getCategoryColor(event.category);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick(event);
      }}
      className="flex w-full cursor-pointer items-center gap-1 rounded px-1 py-0.5 text-left text-xs leading-tight transition-opacity hover:opacity-80"
      style={{
        backgroundColor: `${color}20`,
        color,
        borderLeft: `3px solid ${color}`,
      }}
    >
      {!event.allDay && event.startTime && (
        <span className="shrink-0 font-medium">
          {formatEventTime(event.startDate, event.startTime, event.endTime)}
        </span>
      )}
      <span className="truncate">{event.title}</span>
    </button>
  );
}
