import { useState } from "react";
import type { CalendarEvent } from "../types";
import type { MonthGrid as MonthGridType } from "../utils/dateHelpers";
import { formatDateKey, isDateInRange } from "../utils/dateHelpers";
import { DayCell } from "./DayCell";

const WEEKDAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface MonthGridProps {
  grid: MonthGridType;
  events: CalendarEvent[];
  onDateClick: (date: Date) => void;
  onEventClick: (event: CalendarEvent) => void;
}

function getEventsForDate(events: CalendarEvent[], date: Date): CalendarEvent[] {
  return events.filter((event) => isDateInRange(date, event.startDate, event.endDate));
}

function weekKey(week: readonly { date: Date }[]): string {
  const firstDay = week[0];
  return firstDay ? formatDateKey(firstDay.date) : "empty";
}

export function MonthGrid({ grid, events, onDateClick, onEventClick }: MonthGridProps) {
  const [activePopover, setActivePopover] = useState<string | null>(null);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border">
      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAY_HEADERS.map((header) => (
          <div
            key={header}
            className="border-r border-border px-2 py-2 text-center text-xs font-semibold text-muted-foreground last:border-r-0"
          >
            {header}
          </div>
        ))}
      </div>
      {grid.weeks.map((week) => (
        <div key={weekKey(week)} className="grid grid-cols-7">
          {week.map((day) => {
            const dayKey = formatDateKey(day.date);
            return (
              <DayCell
                key={dayKey}
                date={day.date}
                isCurrentMonth={day.isCurrentMonth}
                isToday={day.isToday}
                events={getEventsForDate(events, day.date)}
                onDateClick={onDateClick}
                onEventClick={onEventClick}
                popoverOpen={activePopover === dayKey}
                onPopoverOpenChange={(open) => {
                  if (open) {
                    setActivePopover(dayKey);
                  } else {
                    setActivePopover((prev) => (prev === dayKey ? null : prev));
                  }
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
