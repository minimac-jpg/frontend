import { Eye, EyeOff, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUpdateSecret } from "../../hooks/use-secrets";
import type { Secret, UpdateSecretRequest } from "../../types/secret";

interface SecretEditFormProps {
  secret: Secret;
  onSuccess?: () => void;
  folders?: string[];
  projects?: string[];
}

export function SecretEditForm({
  secret,
  onSuccess,
  folders = [],
  projects = [],
}: SecretEditFormProps) {
  const { mutateAsync: updateSecret, isPending, error } = useUpdateSecret(secret.id);
  const [name, setName] = useState(secret.name);
  const [value, setValue] = useState("");
  const [folder, setFolder] = useState<string | null>(secret.folder ?? null);
  const [project, setProject] = useState<string | null>(secret.project ?? null);
  const [active, setActive] = useState(secret.status === "active");
  const [showValue, setShowValue] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!name.trim()) {
      setValidationError("Secret name is required");
      return;
    }

    const data: UpdateSecretRequest = {};
    if (name.trim() !== secret.name) data.name = name.trim();
    if (value.trim()) data.value = value.trim();
    if (folder !== (secret.folder ?? null)) data.folder = folder ?? undefined;
    if (project !== (secret.project ?? null)) data.project = project ?? undefined;
    const newStatus = active ? "active" : "disabled";
    if (newStatus !== secret.status) data.status = newStatus;

    if (Object.keys(data).length === 0) {
      setValidationError("No changes to save");
      return;
    }

    try {
      await updateSecret(data);
      onSuccess?.();
    } catch {
      // error captured in mutation error
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      {validationError && (
        <p className="text-sm text-destructive" role="alert">
          {validationError}
        </p>
      )}

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error.message}
        </p>
      )}

      <div className="grid gap-2">
        <label htmlFor="edit-secret-name" className="text-sm font-medium">
          Name
        </label>
        <Input
          id="edit-secret-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isPending}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="edit-secret-value" className="text-sm font-medium">
          New Value
        </label>
        <div className="relative">
          <Input
            id="edit-secret-value"
            type={showValue ? "text" : "password"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Leave blank to keep current"
            className="pr-9"
          />
          <button
            type="button"
            onClick={() => setShowValue(!showValue)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            tabIndex={-1}
          >
            {showValue ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Folder</label>
          <Combobox items={folders} value={folder} onValueChange={setFolder}>
            <ComboboxInput placeholder="Select folder" disabled={isPending} />
            <ComboboxContent>
              <ComboboxEmpty>No folders found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Project</label>
          <Combobox items={projects} value={project} onValueChange={setProject}>
            <ComboboxInput placeholder="Select project" disabled={isPending} />
            <ComboboxContent>
              <ComboboxEmpty>No projects found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg border p-3">
        <div>
          <p className="text-sm font-medium">Active</p>
          <p className="text-xs text-muted-foreground">Secret can be used in pipelines</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={active}
          onClick={() => setActive(!active)}
          disabled={isPending}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 ${active ? "bg-primary" : "bg-input"}`}
        >
          <span
            className={`pointer-events-none inline-block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform ${active ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>

      <DialogFooter className="pt-2">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isPending}>
          {isPending && <Loader2 className="size-4 animate-spin" />}
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </DialogFooter>
    </form>
  );
}
