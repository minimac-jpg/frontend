import { useQuery } from "@tanstack/react-query";
import { addMonths, endOfMonth, format, startOfMonth, subMonths } from "date-fns";
import type { CalendarEvent } from "../types";
import { calendarService } from "./calendar-service";

function getDateRange(year: number, month: number): { start: string; end: string } {
  const monthDate = new Date(year, month);
  const start = startOfMonth(subMonths(monthDate, 1));
  const end = endOfMonth(addMonths(monthDate, 1));
  return {
    start: format(start, "yyyy-MM-dd"),
    end: format(end, "yyyy-MM-dd"),
  };
}

export function useEventsQuery(year: number, month: number) {
  const { start, end } = getDateRange(year, month);

  return useQuery<CalendarEvent[]>({
    queryKey: ["calendar-events", start, end],
    queryFn: () => calendarService.getEventsForDateRange(start, end),
  });
}
