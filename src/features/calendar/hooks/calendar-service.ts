import { type CalendarEvent, EVENT_CATEGORIES, type EventCategory } from "../types";

const STORAGE_KEY = "harlie-calendar-events";
const CATEGORIES_KEY = "harlie-calendar-categories";

function loadEvents(): CalendarEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CalendarEvent[];
  } catch {
    return [];
  }
}

function saveEvents(events: CalendarEvent[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function generateId(): string {
  return crypto.randomUUID();
}

function loadCategoriesRaw(): EventCategory[] {
  try {
    const raw = localStorage.getItem(CATEGORIES_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as EventCategory[];
  } catch {
    return [];
  }
}

function saveCategories(categories: EventCategory[]): void {
  localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
}

function seedDefaultCategories(): void {
  const existing = localStorage.getItem(CATEGORIES_KEY);
  if (!existing) {
    saveCategories(EVENT_CATEGORIES);
  }
}

export const calendarService = {
  listEvents(): CalendarEvent[] {
    return loadEvents();
  },

  getEventsForDateRange(rangeStart: string, rangeEnd: string): CalendarEvent[] {
    const events = loadEvents();
    return events.filter((event) => event.startDate <= rangeEnd && event.endDate >= rangeStart);
  },

  createEvent(data: Omit<CalendarEvent, "id">): CalendarEvent {
    const event: CalendarEvent = { id: generateId(), ...data };
    const events = loadEvents();
    events.push(event);
    saveEvents(events);
    return event;
  },

  updateEvent(id: string, data: Partial<Omit<CalendarEvent, "id">>): CalendarEvent {
    const events = loadEvents();
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) throw new Error(`Event ${id} not found`);
    const existing = events[index];
    if (!existing) throw new Error(`Event ${id} not found`);
    const updated: CalendarEvent = { ...existing, ...data };
    events[index] = updated;
    saveEvents(events);
    return updated;
  },

  deleteEvent(id: string): void {
    const events = loadEvents();
    const filtered = events.filter((e) => e.id !== id);
    saveEvents(filtered);
  },

  getCategories(): EventCategory[] {
    seedDefaultCategories();
    return loadCategoriesRaw();
  },

  addCategory(category: EventCategory): void {
    seedDefaultCategories();
    const categories = loadCategoriesRaw();
    categories.push(category);
    saveCategories(categories);
  },

  updateCategory(value: string, data: Partial<EventCategory>): void {
    const categories = loadCategoriesRaw();
    const index = categories.findIndex((c) => c.value === value);
    if (index === -1) return;
    categories[index] = { ...categories[index]!, ...data };
    saveCategories(categories);
  },

  deleteCategory(value: string): void {
    let categories = loadCategoriesRaw();
    categories = categories.filter((c) => c.value !== value);
    saveCategories(categories);

    const events = loadEvents();
    const updated = events.map((e) => (e.category === value ? { ...e, category: "other" } : e));
    saveEvents(updated);
  },
};
