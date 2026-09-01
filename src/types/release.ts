export interface ReleaseChecklist {
  releaseName: string;
  itemName: string;
  itemValue: "yes" | "no" | null;
  signOffBy: string | null;
  signOffAt: string | null;
  updatedBy: string | null;
  updatedAt: string | null;
  isRequired: boolean;
}

export type ReleaseStatus =
  | "draft"
  | "pending_approval"
  | "approved"
  | "published"
  | "failed"
  | "cancelled"
  | "archived";

export type ReleaseKind = "manual" | "build_output" | "git_tag" | "scheduled" | "promotion";

export type ReleaseNoteFormat = "markdown" | "plain_text";

export interface ReleaseChannelDto {
  type: string;
  value?: string;
}

export interface ReleaseTargetDto {
  environment_id: string | null;
  channel: ReleaseChannelDto | null;
}

export interface ReleaseNoteDto {
  title: string;
  body: string;
  format: ReleaseNoteFormat;
}

export interface ReleaseTimelineEventDto {
  kind: string;
  actor: string | null;
  occurred_at: string;
  detail: string | null;
}

export interface Release {
  id: string;
  name: string;
  version: string;
  title: string | null;
  kind: ReleaseKind | null;
  status: ReleaseStatus;
  projectId: string;
  projectName: string | null;
  target: ReleaseTargetDto;
  notes: ReleaseNoteDto[];
  buildId: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface ReleaseArtifactRow {
  id: string;
  name: string;
  kind: string | null;
  checksum: string | null;
  sizeBytes: number;
  required: boolean;
  appKey: string;
  version: string;
  buildNumber: number;
  hash: string;
  buildTime: string;
  updatedAt: string;
  deployedAt: string | null;
  ticketNumber: string;
  isRemoved: boolean;
}

export interface CreateReleaseInput {
  projectId: string;
  version: string;
  title?: string;
  notes?: ReleaseNoteDto[];
}

export interface UpdateReleaseInput {
  title?: string;
  notes?: ReleaseNoteDto[];
}
