import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { CalendarEvent } from "../types";
import { formatDateKey } from "../utils/dateHelpers";
import { EventChip } from "./EventChip";

const MAX_VISIBLE_EVENTS = 3;

interface DayCellProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: CalendarEvent) => void;
  popoverOpen?: boolean;
  onPopoverOpenChange?: (open: boolean) => void;
}

export function DayCell({
  date,
  isCurrentMonth,
  isToday,
  events,
  onDateClick,
  onEventClick,
  popoverOpen,
  onPopoverOpenChange,
}: DayCellProps) {
  const hasMore = events.length > MAX_VISIBLE_EVENTS;
  const visibleEvents = events.slice(0, MAX_VISIBLE_EVENTS);
  const hiddenEvents = events.slice(MAX_VISIBLE_EVENTS);

  return (
    <div
      onClick={() => onDateClick(date)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onDateClick(date);
        }
      }}
      className="flex min-h-[90px] cursor-pointer flex-col gap-0.5 border-r border-b border-border p-1 text-left transition-colors hover:bg-slate-200/90"
    >
      <div className="flex items-center justify-center">
        <span
          className={`inline-flex size-6 items-center justify-center rounded-full text-xs ${
            isToday
              ? "bg-primary text-primary-foreground"
              : isCurrentMonth
                ? "text-foreground"
                : "text-muted-foreground"
          }`}
        >
          {date.getDate()}
        </span>
      </div>
      <div className="flex flex-col gap-0.5 overflow-hidden">
        {visibleEvents.map((event) => (
          <EventChip key={event.id} event={event} onClick={onEventClick} />
        ))}
        {hasMore && (
          <Popover open={popoverOpen} onOpenChange={onPopoverOpenChange}>
            <PopoverTrigger asChild>
              <span
                className="inline-flex cursor-pointer items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-gray-200/90"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                  }
                }}
              >
                +{hiddenEvents.length} more
              </span>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2" onClick={(e) => e.stopPropagation()}>
              <ScrollArea className="max-h-48">
                <div className="flex flex-col gap-1">
                  <span className="px-1 text-xs font-medium text-muted-foreground">
                    {formatDateKey(date)}
                  </span>
                  {hiddenEvents.map((event) => (
                    <EventChip key={event.id} event={event} onClick={onEventClick} />
                  ))}
                </div>
              </ScrollArea>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
}
