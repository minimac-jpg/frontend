import { useCallback, useEffect, useMemo, useState } from "react";
import { calendarService } from "../hooks/calendar-service";
import {
  useCreateEventMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} from "../hooks/useEventMutations";
import { useEventsQuery } from "../hooks/useEventsQuery";
import type { CalendarEvent, EventCategory } from "../types";
import {
  formatDateKey,
  getCurrentYearMonth,
  getMonthGrid,
  nextMonth,
  prevMonth,
} from "../utils/dateHelpers";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CalendarFilter, type CalendarFilters } from "./CalendarFilter";
import { CalendarHeader } from "./CalendarHeader";
import { EventDialog } from "./EventDialog";
import { ManageCategoriesDialog } from "./ManageCategoriesDialog";
import { MonthGrid } from "./MonthGrid";

interface CalendarPageProps {
  year: number;
  month: number;
  onNavigate: (year: number, month: number) => void;
}

function matchesFilters(event: CalendarEvent, filters: CalendarFilters): boolean {
  if (filters.query) {
    const q = filters.query.toLowerCase();
    const titleMatch = event.title.toLowerCase().includes(q);
    const descriptionMatch = event.description?.toLowerCase().includes(q) ?? false;
    const locationMatch = event.location?.toLowerCase().includes(q) ?? false;
    if (!titleMatch && !descriptionMatch && !locationMatch) return false;
  }

  if (filters.category && filters.category !== "all" && event.category !== filters.category)
    return false;

  if (filters.dateFrom && event.endDate < filters.dateFrom) return false;
  if (filters.dateTo && event.startDate > filters.dateTo) return false;

  return true;
}

const defaultFilters: CalendarFilters = { query: "", dateFrom: "", dateTo: "", category: "all" };

export function CalendarPage({ year, month, onNavigate }: CalendarPageProps) {
  const { data: events = [], isLoading } = useEventsQuery(year, month);
  const createEvent = useCreateEventMutation();
  const updateEvent = useUpdateEventMutation();
  const deleteEvent = useDeleteEventMutation();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [manageDialogOpen, setManageDialogOpen] = useState(false);
  const [pendingDeleteCategory, setPendingDeleteCategory] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | undefined>();
  const [defaultDate, setDefaultDate] = useState<string | undefined>();
  const [filters, setFilters] = useState<CalendarFilters>(defaultFilters);
  const [categories, setCategories] = useState<EventCategory[]>(() =>
    calendarService.getCategories(),
  );

  useEffect(() => {
    setCategories(calendarService.getCategories());
  }, []);

  const refreshCategories = useCallback(() => {
    setCategories(calendarService.getCategories());
  }, []);

  const handleAddCategory = useCallback(
    (category: EventCategory) => {
      calendarService.addCategory(category);
      refreshCategories();
    },
    [refreshCategories],
  );

  const handleUpdateCategory = useCallback(
    (value: string, data: Partial<EventCategory>) => {
      calendarService.updateCategory(value, data);
      refreshCategories();
    },
    [refreshCategories],
  );

  const handleDeleteCategory = useCallback(
    (value: string) => {
      calendarService.deleteCategory(value);
      refreshCategories();
    },
    [refreshCategories],
  );

  const confirmDeleteCategory = useCallback(() => {
    if (!pendingDeleteCategory) return;
    handleDeleteCategory(pendingDeleteCategory.value);
    setPendingDeleteCategory(null);
  }, [pendingDeleteCategory, handleDeleteCategory]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => matchesFilters(event, filters));
  }, [events, filters]);

  const grid = useMemo(() => getMonthGrid(year, month), [year, month]);

  const handlePrevMonth = useCallback(() => {
    const prev = prevMonth(year, month);
    onNavigate(prev.year, prev.month);
  }, [year, month, onNavigate]);

  const handleNextMonth = useCallback(() => {
    const next = nextMonth(year, month);
    onNavigate(next.year, next.month);
  }, [year, month, onNavigate]);

  const handleToday = useCallback(() => {
    const today = getCurrentYearMonth();
    onNavigate(today.year, today.month);
  }, [onNavigate]);

  const openAddDialog = useCallback((date?: Date) => {
    setEditingEvent(undefined);
    setDefaultDate(date ? formatDateKey(date) : undefined);
    setDialogOpen(true);
  }, []);

  const openEditDialog = useCallback((event: CalendarEvent) => {
    setEditingEvent(event);
    setDefaultDate(undefined);
    setDialogOpen(true);
  }, []);

  const handleSave = useCallback(
    (data: Omit<CalendarEvent, "id">) => {
      if (editingEvent) {
        updateEvent.mutate({ id: editingEvent.id, data });
      } else {
        createEvent.mutate(data);
      }
      setDialogOpen(false);
      setEditingEvent(undefined);
    },
    [editingEvent, createEvent, updateEvent],
  );

  const handleDelete = useCallback(
    (id: string) => {
      deleteEvent.mutate(id);
      setDialogOpen(false);
      setEditingEvent(undefined);
    },
    [deleteEvent],
  );

  return (
    <div className="flex flex-col">
      <CalendarHeader
        year={year}
        month={month}
        categories={categories}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
        onAddEvent={() => openAddDialog()}
        onManageCategories={() => setManageDialogOpen(true)}
        onNavigate={onNavigate}
      />

      <CalendarFilter filters={filters} onChange={setFilters} categories={categories} />

      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-sm text-muted-foreground">
          Loading...
        </div>
      ) : (
        <MonthGrid
          grid={grid}
          events={filteredEvents}
          onDateClick={(date) => openAddDialog(date)}
          onEventClick={(event) => openEditDialog(event)}
        />
      )}

      <EventDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) {
            setEditingEvent(undefined);
            setDefaultDate(undefined);
          }
        }}
        event={editingEvent}
        defaultDate={defaultDate}
        categories={categories}
        onAddCategory={handleAddCategory}
        onSave={handleSave}
        onDelete={handleDelete}
      />

      <ManageCategoriesDialog
        open={manageDialogOpen}
        onOpenChange={setManageDialogOpen}
        categories={categories}
        onAddCategory={handleAddCategory}
        onUpdateCategory={handleUpdateCategory}
        onRequestDeleteCategory={(value, label) => setPendingDeleteCategory({ value, label })}
      />

      <AlertDialog
        open={!!pendingDeleteCategory}
        onOpenChange={(open) => { if (!open) setPendingDeleteCategory(null); }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Category</AlertDialogTitle>
            <AlertDialogDescription>
              Permanently delete{" "}
              <span className="font-medium text-foreground">{pendingDeleteCategory?.label}</span>?
              Events using this category will be moved to "Other".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setPendingDeleteCategory(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteCategory}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
