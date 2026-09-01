import { Check, Pencil, Plus, Trash2, X } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { EventCategory } from "../types";

function isValidHex(s: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(s);
}

interface ManageCategoriesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: EventCategory[];
  onAddCategory: (category: EventCategory) => void;
  onUpdateCategory: (value: string, data: Partial<EventCategory>) => void;
  onRequestDeleteCategory: (value: string, label: string) => void;
}

export function ManageCategoriesDialog({
  open,
  onOpenChange,
  categories,
  onAddCategory,
  onUpdateCategory,
  onRequestDeleteCategory,
}: ManageCategoriesDialogProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#3b82f6");
  const [addError, setAddError] = useState("");
  const [editingValue, setEditingValue] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editColor, setEditColor] = useState("");

  const handleAdd = useCallback(() => {
    const trimmed = name.trim();
    if (!trimmed) {
      setAddError("Name is required");
      return;
    }
    const value = trimmed
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    if (!value) {
      setAddError("Name must contain valid characters");
      return;
    }
    if (categories.some((c) => c.value === value)) {
      setAddError("A category with this name already exists");
      return;
    }
    onAddCategory({ value, label: trimmed, color });
    setName("");
    setColor("#3b82f6");
    setAddError("");
  }, [name, color, categories, onAddCategory]);

  const startEditing = useCallback((cat: EventCategory) => {
    setEditingValue(cat.value);
    setEditName(cat.label);
    setEditColor(cat.color);
  }, []);

  const cancelEditing = useCallback(() => {
    setEditingValue(null);
    setEditName("");
    setEditColor("");
  }, []);

  const saveEditing = useCallback(() => {
    if (!editingValue) return;
    const trimmed = editName.trim();
    if (!trimmed) return;
    onUpdateCategory(editingValue, { label: trimmed, color: editColor });
    cancelEditing();
  }, [editingValue, editName, editColor, onUpdateCategory, cancelEditing]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 isolate z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-xs" onClick={() => onOpenChange(false)} />
      <div
        className={cn(
          "relative z-50 w-full max-w-md rounded-xl bg-popover p-6 text-sm text-popover-foreground ring-1 ring-foreground/10 shadow-lg",
        )}
      >
        <div className="flex flex-col gap-1.5 pb-4">
          <h2 className="text-lg font-semibold leading-none">Manage Categories</h2>
          <p className="text-sm text-muted-foreground">Add, edit, or remove categories.</p>
        </div>

        <div className="grid gap-3">
          <div className="flex flex-col gap-1.5">
            {categories.map((cat) => {
              const isEditing = editingValue === cat.value;
              return (
                <div
                  key={cat.value}
                  className="flex items-center justify-between rounded-md border border-border px-3 py-2"
                >
                  {isEditing ? (
                    <div className="flex flex-1 flex-wrap items-center gap-2">
                      <Input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="h-7 w-28 text-sm"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEditing();
                          if (e.key === "Escape") cancelEditing();
                        }}
                      />
                      <div className="flex items-center gap-1">
                        <input
                          type="color"
                          value={editColor}
                          onChange={(e) => setEditColor(e.target.value)}
                          className="size-7 cursor-pointer rounded border border-border"
                        />
                        <Input
                          value={editColor}
                          onChange={(e) => {
                            const v = e.target.value;
                            setEditColor(v.startsWith("#") ? v : `#${v}`);
                          }}
                          onBlur={() => {
                            if (!isValidHex(editColor)) setEditColor("#3b82f6");
                          }}
                          className="h-7 w-20 text-xs font-mono"
                          placeholder="#hex"
                        />
                      </div>
                      <Button variant="ghost" size="icon-xs" onClick={saveEditing}>
                        <Check className="size-3.5 text-green-600" />
                      </Button>
                      <Button variant="ghost" size="icon-xs" onClick={cancelEditing}>
                        <X className="size-3.5" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block size-3 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-sm">{cat.label}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          onClick={() => startEditing(cat)}
                          aria-label={`Edit ${cat.label}`}
                        >
                          <Pencil className="size-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          onClick={() => onRequestDeleteCategory(cat.value, cat.label)}
                          aria-label={`Delete ${cat.label}`}
                        >
                          <Trash2 className="size-3.5 text-destructive" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid gap-2 rounded-md border border-border p-3">
            <Label className="text-xs text-muted-foreground">Add new category</Label>
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Category name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setAddError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                  }}
                />
                {addError && <p className="pt-1 text-xs text-destructive">{addError}</p>}
              </div>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="size-9 cursor-pointer rounded border border-border"
              />
              <Input
                value={color}
                onChange={(e) => {
                  const v = e.target.value;
                  setColor(v.startsWith("#") ? v : `#${v}`);
                }}
                onBlur={() => {
                  if (!isValidHex(color)) setColor("#3b82f6");
                }}
                className="h-9 w-22 text-xs font-mono"
                placeholder="#hex"
              />
              <Button size="sm" onClick={handleAdd}>
                <Plus className="mr-1 size-3.5" />
                Add
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 pt-6 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
