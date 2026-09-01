export interface CalendarEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  allDay: boolean;
  category: string;
  description?: string;
  location?: string;
}

export interface EventCategory {
  value: string;
  label: string;
  color: string;
}

export const EVENT_CATEGORIES: EventCategory[] = [
  { value: "work", label: "Work", color: "#3b82f6" },
  { value: "personal", label: "Personal", color: "#22c55e" },
  { value: "important", label: "Important", color: "#ef4444" },
  { value: "meeting", label: "Meeting", color: "#a855f7" },
  { value: "other", label: "Other", color: "#6b7280" },
];

const fallbackCategory: EventCategory = { value: "other", label: "Other", color: "#6b7280" };

export function getCategory(value: string, categories: EventCategory[]): EventCategory {
  return categories.find((c) => c.value === value) ?? fallbackCategory;
}
