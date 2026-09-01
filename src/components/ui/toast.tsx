import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type ToastVariant = "default" | "success" | "destructive";

export interface ToastMessage {
  id: number;
  message: string;
  variant: ToastVariant;
}

type Listener = (toasts: ToastMessage[]) => void;

let toasts: ToastMessage[] = [];
let nextId = 1;
const listeners = new Set<Listener>();

function emit() {
  for (const listener of listeners) {
    listener([...toasts]);
  }
}

function push(message: string, variant: ToastVariant) {
  const toast: ToastMessage = { id: nextId++, message, variant };
  toasts = [...toasts, toast];
  emit();
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== toast.id);
    emit();
  }, 4000);
}

export const toast = {
  success: (message: string) => push(message, "success"),
  error: (message: string) => push(message, "destructive"),
  info: (message: string) => push(message, "default"),
};

export function errorToMessage(err: unknown): string {
  if (err instanceof Error && err.message) return err.message;
  return "Something went wrong. Please try again.";
}

export function Toaster() {
  const [items, setItems] = useState<ToastMessage[]>(toasts);

  useEffect(() => {
    const listener: Listener = (next) => setItems(next);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      {items.map((toastItem) => {
        const variantCls =
          toastItem.variant === "destructive"
            ? "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400"
            : toastItem.variant === "success"
              ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "border-border bg-card text-foreground";
        return (
          <div
            key={toastItem.id}
            className={cn(
              "flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] font-medium shadow-md transition-all duration-200",
              variantCls,
            )}
            style={{ maxWidth: "320px" }}
          >
            {toastItem.message}
          </div>
        );
      })}
    </div>
  );
}
