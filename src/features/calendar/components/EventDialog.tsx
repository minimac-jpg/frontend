import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type { CalendarEvent, EventCategory } from "../types";
import { DeleteEventConfirm } from "./DeleteEventConfirm";

interface EventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event?: CalendarEvent;
  defaultDate?: string;
  categories: EventCategory[];
  onAddCategory: (category: EventCategory) => void;
  onSave: (data: Omit<CalendarEvent, "id">) => void;
  onDelete?: (id: string) => void;
}

interface FormData {
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
  category: string;
  description: string;
  location: string;
}

interface FormErrors {
  title?: string;
  startDate?: string;
  endDate?: string;
  endTime?: string;
}

function toTimeInput(time?: string): string {
  if (!time) return "";
  return time.slice(0, 5);
}

export function EventDialog({
  open,
  onOpenChange,
  event,
  defaultDate,
  categories,
  onAddCategory,
  onSave,
  onDelete,
}: EventDialogProps) {
  const isEdit = !!event;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("#3b82f6");
  const [categoryAddError, setCategoryAddError] = useState("");

  const today = format(new Date(), "yyyy-MM-dd");

  const [form, setForm] = useState<FormData>(() => ({
    title: "",
    startDate: defaultDate ?? today,
    endDate: defaultDate ?? today,
    startTime: "09:00",
    endTime: "10:00",
    allDay: false,
    category: "work",
    description: "",
    location: "",
  }));

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (open && event) {
      setForm({
        title: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        startTime: toTimeInput(event.startTime),
        endTime: toTimeInput(event.endTime),
        allDay: event.allDay,
        category: event.category,
        description: event.description ?? "",
        location: event.location ?? "",
      });
      setErrors({});
    } else if (open && defaultDate) {
      setForm({
        title: "",
        startDate: defaultDate,
        endDate: defaultDate,
        startTime: "09:00",
        endTime: "10:00",
        allDay: false,
        category: "work",
        description: "",
        location: "",
      });
      setErrors({});
    }
  }, [open, event, defaultDate]);

  const updateField = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => {
      if (key === "startDate" && typeof value === "string") {
        const next = { ...prev, startDate: value };
        if (value > prev.endDate) {
          next.endDate = value;
        }
        return next;
      }
      return { ...prev, [key]: value };
    });
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const validate = useCallback((): FormErrors => {
    const errs: FormErrors = {};
    if (!form.title.trim()) {
      errs.title = "Title is required";
    }
    if (!form.startDate) {
      errs.startDate = "Start date is required";
    }
    if (!form.endDate) {
      errs.endDate = "End date is required";
    }
    if (form.startDate && form.endDate && form.endDate < form.startDate) {
      errs.endDate = "End date must be on or after start date";
    }
    if (!form.allDay && form.startTime && form.endTime && form.endTime <= form.startTime) {
      errs.endTime = "End time must be after start time";
    }
    return errs;
  }, [form]);

  const handleSubmit = useCallback(() => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    onSave({
      title: form.title.trim(),
      startDate: form.startDate,
      endDate: form.endDate,
      startTime: form.allDay ? undefined : form.startTime || undefined,
      endTime: form.allDay ? undefined : form.endTime || undefined,
      allDay: form.allDay,
      category: form.category,
      description: form.description.trim() || undefined,
      location: form.location.trim() || undefined,
    });
  }, [form, validate, onSave]);

  const handleDelete = useCallback(() => {
    if (event && onDelete) {
      onDelete(event.id);
    }
    setShowDeleteConfirm(false);
  }, [event, onDelete]);

  const handleAddCategory = useCallback(() => {
    const name = newCategoryName.trim();
    if (!name) {
      setCategoryAddError("Name is required");
      return;
    }
    const value = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    if (!value) {
      setCategoryAddError("Name must contain valid characters");
      return;
    }
    const newCat: EventCategory = { value, label: name, color: newCategoryColor };
    onAddCategory(newCat);
    updateField("category", value);
    setIsAddingCategory(false);
    setNewCategoryName("");
    setNewCategoryColor("#3b82f6");
    setCategoryAddError("");
  }, [newCategoryName, newCategoryColor, onAddCategory, updateField]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit Event" : "Add Event"}</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Update the event details below."
                : "Fill in the details for your new event."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="Event title"
              />
              {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="startDate">Start date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={form.startDate}
                  onChange={(e) => updateField("startDate", e.target.value)}
                />
                {errors.startDate && <p className="text-xs text-destructive">{errors.startDate}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="endDate">End date *</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={form.endDate}
                  min={form.startDate}
                  onChange={(e) => updateField("endDate", e.target.value)}
                />
                {errors.endDate && <p className="text-xs text-destructive">{errors.endDate}</p>}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="allDay"
                type="checkbox"
                checked={form.allDay}
                onChange={(e) => updateField("allDay", e.target.checked)}
                className="size-4 rounded border-border text-primary"
              />
              <Label htmlFor="allDay" className="text-sm font-normal">
                All day
              </Label>
            </div>

            {!form.allDay && (
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startTime">Start time</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={form.startTime}
                    onChange={(e) => updateField("startTime", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endTime">End time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={form.endTime}
                    onChange={(e) => updateField("endTime", e.target.value)}
                  />
                  {errors.endTime && <p className="text-xs text-destructive">{errors.endTime}</p>}
                </div>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              {isAddingCategory ? (
                <div className="grid gap-2 rounded-md border border-border p-3">
                  <div className="grid gap-1">
                    <Label htmlFor="new-cat-name" className="text-xs text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="new-cat-name"
                      value={newCategoryName}
                      onChange={(e) => {
                        setNewCategoryName(e.target.value);
                        setCategoryAddError("");
                      }}
                      placeholder="Category name"
                    />
                    {categoryAddError && (
                      <p className="text-xs text-destructive">{categoryAddError}</p>
                    )}
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="new-cat-color" className="text-xs text-muted-foreground">
                      Color
                    </Label>
                    <div className="flex items-center gap-2">
                      <input
                        id="new-cat-color"
                        type="color"
                        value={newCategoryColor}
                        onChange={(e) => setNewCategoryColor(e.target.value)}
                        className="size-8 cursor-pointer rounded border border-border"
                      />
                      <span
                        className="inline-block size-4 rounded-full"
                        style={{ backgroundColor: newCategoryColor }}
                      />
                      <span className="text-xs text-muted-foreground">{newCategoryColor}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button size="sm" onClick={handleAddCategory}>
                      Add
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsAddingCategory(false);
                        setNewCategoryName("");
                        setNewCategoryColor("#3b82f6");
                        setCategoryAddError("");
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Select
                  value={form.category}
                  onValueChange={(value) => {
                    if (value === "__add__") {
                      setIsAddingCategory(true);
                    } else {
                      updateField("category", value);
                    }
                  }}
                >
                  <SelectTrigger id="category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
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
                    <Separator className="my-1" />
                    <SelectItem value="__add__">
                      <span className="text-muted-foreground">+ Add new category</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Optional description"
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="Optional location"
              />
            </div>
          </div>

          <DialogFooter>
            <div className="flex w-full items-center justify-between">
              {isEdit ? (
                <Button variant="destructive" size="sm" onClick={() => setShowDeleteConfirm(true)}>
                  Delete
                </Button>
              ) : (
                <div />
              )}
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>{isEdit ? "Save changes" : "Save"}</Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {isEdit && event && (
        <DeleteEventConfirm
          open={showDeleteConfirm}
          onOpenChange={setShowDeleteConfirm}
          onConfirm={handleDelete}
          eventTitle={event.title}
        />
      )}
    </>
  );
}
