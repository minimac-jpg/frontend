import { type FormEvent, useState } from "react";
import { Button } from "../common/button";

interface PipelineEditorProps {
  initialSource?: string;
  onSave?: (source: string) => void;
  onValidate?: (source: string) => void;
  onCompile?: (source: string) => void;
  isSaving?: boolean;
}

const LANGUAGES = ["TypeScript", "JavaScript", "Python", "Rust"] as const;
type Language = (typeof LANGUAGES)[number];

export function PipelineEditor({
  initialSource = "",
  onSave,
  onValidate,
  onCompile,
  isSaving = false,
}: PipelineEditorProps) {
  const [source, setSource] = useState(initialSource);
  const [language, setLanguage] = useState<Language>("TypeScript");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave?.(source);
  };

  const handleValidate = () => {
    onValidate?.(source);
  };

  const handleCompile = () => {
    onCompile?.(source);
  };

  return (
    <div className="pipeline-editor">
      <div className="pipeline-editor-toolbar">
        <label className="pipeline-editor-label" htmlFor="pipeline-language">
          Language
        </label>
        <select
          id="pipeline-language"
          className="pipeline-editor-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <div className="pipeline-editor-actions">
          <Button variant="secondary" size="sm" onClick={handleValidate}>
            Validate
          </Button>
          <Button variant="secondary" size="sm" onClick={handleCompile}>
            Compile
          </Button>
          <Button variant="primary" size="sm" onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      <textarea
        className="pipeline-editor-textarea"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="# Pipeline definition\nstages:\n  - name: build\n    jobs:\n      - name: compile\n        run: echo compile"
        spellCheck={false}
        rows={20}
      />
    </div>
  );
}
