import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateSecret } from "@/hooks/use-secrets";

interface SecretCreateFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  folders?: string[];
  projects?: string[];
}

export function SecretCreateForm({
  onSuccess,
  onCancel,
  folders = [],
  projects = [],
}: SecretCreateFormProps) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [folder, setFolder] = useState<string | null>(null);
  const [project, setProject] = useState<string | null>(null);
  const [active, setActive] = useState(true);
  const [showValue, setShowValue] = useState(false);

  const createMutation = useCreateSecret();

  const valueMismatch = value !== confirmValue && confirmValue.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !value.trim() || value !== confirmValue) return;

    createMutation.mutate(
      {
        name: name.trim(),
        kind: active ? "active" : "disabled",
        value: value.trim(),
        folder: folder ?? undefined,
        project: project ?? undefined,
      },
      { onSuccess },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="secret-name" className="text-sm font-medium">
          Name *
        </label>
        <Input
          id="secret-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., GITHUB_TOKEN"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="secret-value" className="text-sm font-medium">
          Value *
        </label>
        <div className="relative">
          <Input
            id="secret-value"
            type={showValue ? "text" : "password"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter secret value"
            required
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

      <div className="grid gap-2">
        <label htmlFor="secret-confirm" className="text-sm font-medium">
          Confirm Value *
        </label>
        <Input
          id="secret-confirm"
          type="password"
          value={confirmValue}
          onChange={(e) => setConfirmValue(e.target.value)}
          placeholder="Re-enter secret value"
          required
        />
        {valueMismatch && <p className="text-xs text-destructive">Values do not match</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Folder</label>
          <Combobox items={folders} value={folder} onValueChange={setFolder}>
            <ComboboxInput placeholder="Select folder" />
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
            <ComboboxInput placeholder="Select project" />
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
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${active ? "bg-primary" : "bg-input"}`}
        >
          <span
            className={`pointer-events-none inline-block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform ${active ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>

      <DialogFooter className="pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={
            createMutation.isPending || !name.trim() || !value.trim() || value !== confirmValue
          }
        >
          {createMutation.isPending && <Loader2 className="size-4 animate-spin" />}
          {createMutation.isPending ? "Creating..." : "Create Secret"}
        </Button>
      </DialogFooter>

      {createMutation.isError && (
        <p className="text-sm text-destructive" role="alert">
          Failed to create secret: {createMutation.error.message}
        </p>
      )}
    </form>
  );
}
