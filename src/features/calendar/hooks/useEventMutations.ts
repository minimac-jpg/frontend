import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CalendarEvent } from "../types";
import { calendarService } from "./calendar-service";

function invalidateCalendarQueries(queryClient: ReturnType<typeof useQueryClient>) {
  queryClient.invalidateQueries({ queryKey: ["calendar-events"] });
}

export function useCreateEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Omit<CalendarEvent, "id">) => {
      return calendarService.createEvent(data);
    },
    onSuccess: () => {
      invalidateCalendarQueries(queryClient);
    },
  });
}

export function useUpdateEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Omit<CalendarEvent, "id">> }) => {
      return calendarService.updateEvent(id, data);
    },
    onSuccess: () => {
      invalidateCalendarQueries(queryClient);
    },
  });
}

export function useDeleteEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      calendarService.deleteEvent(id);
    },
    onSuccess: () => {
      invalidateCalendarQueries(queryClient);
    },
  });
}
