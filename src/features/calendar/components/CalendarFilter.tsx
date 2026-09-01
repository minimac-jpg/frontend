import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { EventCategory } from "../types";

export interface CalendarFilters {
  query: string;
  dateFrom: string;
  dateTo: string;
  category: string;
}

interface CalendarFilterProps {
  filters: CalendarFilters;
  onChange: (filters: CalendarFilters) => void;
  categories: EventCategory[];
}

export function CalendarFilter({ filters, onChange, categories }: CalendarFilterProps) {
  const updateField = <K extends keyof CalendarFilters>(key: K, value: CalendarFilters[K]) => {
    if (key === "dateFrom" && typeof value === "string") {
      const next = { ...filters, dateFrom: value };
      if (value > filters.dateTo) {
        next.dateTo = value;
      }
      onChange(next);
    } else {
      onChange({ ...filters, [key]: value });
    }
  };

  const clearFilters = () => {
    onChange({ query: "", dateFrom: "", dateTo: "", category: "all" });
  };

  const hasActiveFilters =
    filters.query ||
    filters.dateFrom ||
    filters.dateTo ||
    (filters.category && filters.category !== "all");

  return (
    <div className="flex flex-wrap items-end gap-3 pb-4">
      <div className="relative min-w-0 flex-1 sm:max-w-xs">
        <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          value={filters.query}
          onChange={(e) => updateField("query", e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="flex items-end gap-2">
        <div className="grid gap-1">
          <Label htmlFor="filter-category" className="text-xs text-muted-foreground">
            Category
          </Label>
          <Select
            value={filters.category}
            onValueChange={(value) => updateField("category", value)}
          >
            <SelectTrigger id="filter-category" className="h-8 w-32">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block size-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span>{cat.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1">
          <Label htmlFor="filter-date-from" className="text-xs text-muted-foreground">
            From
          </Label>
          <Input
            id="filter-date-from"
            type="date"
            value={filters.dateFrom}
            onChange={(e) => updateField("dateFrom", e.target.value)}
            className="h-8 w-36"
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="filter-date-to" className="text-xs text-muted-foreground">
            To
          </Label>
          <Input
            id="filter-date-to"
            type="date"
            value={filters.dateTo}
            min={filters.dateFrom || undefined}
            onChange={(e) => updateField("dateTo", e.target.value)}
            className="h-8 w-36"
          />
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8">
            <X className="mr-1 size-3" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
