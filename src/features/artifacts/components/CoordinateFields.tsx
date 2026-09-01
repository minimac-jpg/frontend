import { Input } from "@/components/ui/input";

interface CoordinateFieldsProps {
  groupId: string;
  artifactId: string;
  version: string;
  classifier: string;
  extension: string;
  checksum: string;
  onGroupIdChange: (v: string) => void;
  onArtifactIdChange: (v: string) => void;
  onVersionChange: (v: string) => void;
  onClassifierChange: (v: string) => void;
  onExtensionChange: (v: string) => void;
  onChecksumChange: (v: string) => void;
}

const FIELD_IDS = {
  groupId: "artifact-group-id",
  artifactId: "artifact-artifact-id",
  version: "artifact-version",
  classifier: "artifact-classifier",
  extension: "artifact-extension",
  checksum: "artifact-checksum",
} as const;

export function CoordinateFields({
  groupId,
  artifactId,
  version,
  classifier,
  extension,
  checksum,
  onGroupIdChange,
  onArtifactIdChange,
  onVersionChange,
  onClassifierChange,
  onExtensionChange,
  onChecksumChange,
}: CoordinateFieldsProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-foreground">Coordinates</legend>
      <div className="space-y-2">
        <div>
          <label htmlFor={FIELD_IDS.groupId} className="mb-1 block text-xs text-muted-foreground">
            Group ID
          </label>
          <Input
            id={FIELD_IDS.groupId}
            placeholder="e.g. com.example"
            value={groupId}
            onChange={(e) => onGroupIdChange(e.target.value)}
            className="h-8 text-xs"
          />
        </div>
        <div>
          <label
            htmlFor={FIELD_IDS.artifactId}
            className="mb-1 block text-xs text-muted-foreground"
          >
            Artifact ID
          </label>
          <Input
            id={FIELD_IDS.artifactId}
            placeholder="e.g. my-lib"
            value={artifactId}
            onChange={(e) => onArtifactIdChange(e.target.value)}
            className="h-8 text-xs"
          />
        </div>
        <div>
          <label htmlFor={FIELD_IDS.version} className="mb-1 block text-xs text-muted-foreground">
            Version
          </label>
          <Input
            id={FIELD_IDS.version}
            placeholder="e.g. 1.0.0"
            value={version}
            onChange={(e) => onVersionChange(e.target.value)}
            className="h-8 text-xs"
          />
        </div>
        <div>
          <label
            htmlFor={FIELD_IDS.classifier}
            className="mb-1 block text-xs text-muted-foreground"
          >
            Classifier
          </label>
          <Input
            id={FIELD_IDS.classifier}
            placeholder="e.g. sources"
            value={classifier}
            onChange={(e) => onClassifierChange(e.target.value)}
            className="h-8 text-xs"
          />
        </div>
        <div>
          <label htmlFor={FIELD_IDS.extension} className="mb-1 block text-xs text-muted-foreground">
            Extension
          </label>
          <Input
            id={FIELD_IDS.extension}
            placeholder="e.g. jar"
            value={extension}
            onChange={(e) => onExtensionChange(e.target.value)}
            className="h-8 text-xs"
          />
        </div>
        <div>
          <label htmlFor={FIELD_IDS.checksum} className="mb-1 block text-xs text-muted-foreground">
            Checksum
          </label>
          <Input
            id={FIELD_IDS.checksum}
            placeholder="SHA-256 / SHA-1 / MD5"
            value={checksum}
            onChange={(e) => onChecksumChange(e.target.value)}
            className="h-8 text-xs font-mono"
          />
        </div>
      </div>
    </fieldset>
  );
}
