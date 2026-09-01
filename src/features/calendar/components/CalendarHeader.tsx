import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { EventCategory } from "../types";
import { formatMonthYear } from "../utils/dateHelpers";
import { CalendarLegend } from "./CalendarLegend";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface CalendarHeaderProps {
  year: number;
  month: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onAddEvent: () => void;
  onManageCategories: () => void;
  onNavigate: (year: number, month: number) => void;
  categories: EventCategory[];
}

export function CalendarHeader({
  year,
  month,
  onPrevMonth,
  onNextMonth,
  onToday,
  onAddEvent,
  onManageCategories,
  onNavigate,
  categories,
}: CalendarHeaderProps) {
  return (
    <div className="flex flex-col gap-3 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <CalendarLegend categories={categories} />
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onToday}>
          Today
        </Button>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onPrevMonth} aria-label="Previous month">
            <ChevronLeft className="size-4" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <span className="min-w-35 cursor-pointer text-center text-sm font-semibold hover:text-accent-foreground">
                {formatMonthYear(year, month)}
              </span>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-64 p-3">
              <div className="flex items-center justify-between pb-2">
                <Button variant="ghost" size="icon-xs" onClick={() => onNavigate(year - 1, month)}>
                  <ChevronLeft className="size-4" />
                </Button>
                <span className="text-sm font-semibold">{year}</span>
                <Button variant="ghost" size="icon-xs" onClick={() => onNavigate(year + 1, month)}>
                  <ChevronRight className="size-4" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {MONTHS.map((label, idx) => (
                  <Button
                    key={label}
                    variant={idx === month ? "default" : "ghost"}
                    size="sm"
                    className="text-xs"
                    onClick={() => onNavigate(year, idx)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="ghost" size="icon" onClick={onNextMonth} aria-label="Next month">
            <ChevronRight className="size-4" />
          </Button>
        </div>
        <Button variant="default" size="sm" onClick={onAddEvent}>
          Add Event
        </Button>
        <Button variant="outline" size="sm" onClick={onManageCategories}>
          Manage
        </Button>
      </div>
    </div>
  );
}
