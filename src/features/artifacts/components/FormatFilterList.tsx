import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { FormatType } from "../api/types";
import { formatColorMap } from "../utils/format-colors";

const FORMATS: { value: FormatType; label: string }[] = [
  { value: "maven", label: "Maven" },
  { value: "npm", label: "npm" },
  { value: "docker", label: "Docker" },
  { value: "pypi", label: "PyPI" },
  { value: "nuget", label: "NuGet" },
];

interface FormatFilterListProps {
  selected: FormatType[];
  onChange: (formats: FormatType[]) => void;
}

export function FormatFilterList({ selected, onChange }: FormatFilterListProps) {
  function toggle(format: FormatType, checked: boolean) {
    if (checked) {
      onChange([...selected, format]);
    } else {
      onChange(selected.filter((f) => f !== format));
    }
  }

  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-foreground">Repository Format</legend>
      <div className="space-y-2">
        {FORMATS.map(({ value, label }) => (
          <Label key={value} className="flex items-center gap-2 text-sm font-normal cursor-pointer">
            <Checkbox
              checked={selected.includes(value)}
              onCheckedChange={(checked) => toggle(value, checked === true)}
            />
            <span className={formatColorMap[value]}>{label}</span>
          </Label>
        ))}
      </div>
    </fieldset>
  );
}
