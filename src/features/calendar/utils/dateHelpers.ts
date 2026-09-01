import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";

export interface DayInfo {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

export interface MonthGrid {
  year: number;
  month: number;
  weeks: DayInfo[][];
}

export function getMonthGrid(year: number, month: number): MonthGrid {
  const monthDate = new Date(year, month);
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  const weeks: DayInfo[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    const weekDays: DayInfo[] = [];
    for (let j = i; j < i + 7 && j < days.length; j++) {
      const date = days[j];
      if (!date) continue;
      weekDays.push({
        date,
        isCurrentMonth: isSameMonth(date, monthDate),
        isToday: isToday(date),
      });
    }
    weeks.push(weekDays);
  }

  return { year, month, weeks };
}

export function formatMonthYear(year: number, month: number): string {
  return format(new Date(year, month), "MMMM yyyy");
}

export function formatDateKey(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function prevMonth(year: number, month: number): { year: number; month: number } {
  const d = subMonths(new Date(year, month), 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

export function nextMonth(year: number, month: number): { year: number; month: number } {
  const d = addMonths(new Date(year, month), 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

export function getCurrentYearMonth(): { year: number; month: number } {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

export function formatEventTime(_date: string, startTime?: string, endTime?: string): string {
  if (!startTime) return "";
  const formatted = startTime.slice(0, 5);
  if (endTime) {
    return `${formatted} - ${endTime.slice(0, 5)}`;
  }
  return formatted;
}

export function isDateInRange(date: Date, startDate: string, endDate: string): boolean {
  const start = parseISO(startDate);
  const end = parseISO(endDate);
  return !isBefore(date, start) && !isAfter(date, end);
}

export { isSameDay, isToday };
