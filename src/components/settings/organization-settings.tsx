"use client";

import { useNavigate } from "@tanstack/react-router";
import {
  Building2,
  Copy,
  Loader2,
  LogOut,
  Mail,
  ShieldCheck,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
import { toast, errorToMessage, Toaster } from "@/components/ui/toast";
import { useWorkspace } from "@/hooks/use-workspace";
import { authClient } from "@/lib/auth-client";

function roleBadgeVariant(role: string): "default" | "secondary" | "outline" {
  if (role === "owner") return "default";
  if (role === "admin") return "secondary";
  return "outline";
}

export function OrganizationSettings() {
  const navigate = useNavigate();
  const {
    user,
    activeOrganization,
    isPersonal,
    isLoading,
    setActiveOrganization,
  } = useWorkspace();

  const {
    data: fullOrganization,
    isPending: fullOrgPending,
    refetch: refetchActiveOrganization,
  } = authClient.useActiveOrganization();

  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"admin" | "member">("member");
  const [inviting, setInviting] = useState(false);
  const [invitationLink, setInvitationLink] = useState<string | null>(null);
  const [busyMemberId, setBusyMemberId] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);

  if (isLoading || fullOrgPending) {
    return (
      <div className="flex items-center justify-center p-16 text-muted-foreground">
        <Loader2 className="size-5 animate-spin" />
      </div>
    );
  }

  if (isPersonal || !activeOrganization || !fullOrganization) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed p-12 text-center">
        <Building2 className="size-8 text-muted-foreground" />
        <h2 className="text-lg font-semibold">No organization selected</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          You're currently in your personal workspace. Switch to an organization
          using the workspace switcher in the sidebar, or create one.
        </p>
      </div>
    );
  }

  const organizationId = activeOrganization.id;
  const members = fullOrganization.members ?? [];
  const currentMember =
    user != null
      ? members.find((member) => member.userId === user.id) ?? null
      : null;
  const myRole = currentMember?.role ?? "member";
  const isOwner = myRole === "owner";
  const canManage = isOwner || myRole === "admin";

  const handleInvite = async () => {
    if (!inviteEmail.trim()) return;
    try {
      setInviting(true);
      const { data, error } = await authClient.organization.inviteMember({
        email: inviteEmail.trim(),
        role: inviteRole,
        organizationId,
        resend: true,
      });
      if (error) throw error;
      const id = data?.id ?? null;
      setInvitationLink(
        id ? `${window.location.origin}/invite/${id}` : null,
      );
      toast.success(`Invitation created for ${inviteEmail.trim()}`);
      setInviteEmail("");
    } catch (err) {
      toast.error(errorToMessage(err));
    } finally {
      setInviting(false);
    }
  };

  const handleRoleChange = async (
    memberId: string,
    role: string,
  ) => {
    try {
      setBusyMemberId(memberId);
      const { error } = await authClient.organization.updateMemberRole({
        memberId,
        role,
        organizationId,
      });
      if (error) throw error;
      toast.success("Member role updated");
      await refetchActiveOrganization();
    } catch (err) {
      toast.error(errorToMessage(err));
    } finally {
      setBusyMemberId(null);
    }
  };

  const handleRemoveMember = async (memberId: string, email: string) => {
    try {
      setBusyMemberId(memberId);
      const { error } = await authClient.organization.removeMember({
        memberIdOrEmail: memberId,
        organizationId,
      });
      if (error) throw error;
      toast.success(`Removed ${email}`);
      await refetchActiveOrganization();
    } catch (err) {
      toast.error(errorToMessage(err));
    } finally {
      setBusyMemberId(null);
    }
  };

  const handleLeave = async () => {
    try {
      setLeaving(true);
      const { error } = await authClient.organization.leave({
        organizationId,
      });
      if (error) throw error;
      await setActiveOrganization(null);
      toast.success(`Left ${activeOrganization.name}`);
      await refetchActiveOrganization();
    } catch (err) {
      toast.error(errorToMessage(err));
    } finally {
      setLeaving(false);
    }
  };

  const copyInvitationLink = async () => {
    if (!invitationLink) return;
    await navigator.clipboard.writeText(invitationLink);
    toast.success("Invitation link copied");
  };

  return (
    <div className="flex flex-col gap-8">
      <Toaster />

      <section className="space-y-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold leading-tight">
                  {activeOrganization.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  @{activeOrganization.slug}
                </p>
              </div>
            </div>
            {canManage && (
              <Button onClick={() => { setInvitationLink(null); setInviteOpen(true); }}>
                <UserRoundPlus className="size-4" />
                Invite member
              </Button>
            )}
          </div>
          <div className="divide-y">
            {members.length === 0 ? (
              <p className="p-6 text-sm text-muted-foreground">
                No members found.
              </p>
            ) : (
              members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-4 px-6"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                    <UserRound className="size-4 text-muted-foreground" />
                  </span>
                  <div className="grid flex-1 min-w-0 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {member.user?.name ?? member.userId}
                      {member.userId === user?.id && (
                        <span className="ml-1.5 text-xs text-muted-foreground">
                          (you)
                        </span>
                      )}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {member.user?.email ?? ""}
                    </span>
                  </div>
                  <Badge variant={roleBadgeVariant(member.role)}>
                    {member.role}
                  </Badge>
                  {canManage && member.role !== "owner" && (
                    <div className="flex items-center gap-2">
                      <Select
                        value={member.role}
                        onValueChange={(value) =>
                          handleRoleChange(member.id, value)
                        }
                        disabled={busyMemberId === member.id}
                      >
                        <SelectTrigger className="h-8 w-28" aria-label="Change role">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="member">Member</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleRemoveMember(member.id, member.user?.email ?? member.userId)
                        }
                        disabled={busyMemberId === member.id}
                      >
                        {busyMemberId === member.id && (
                          <Loader2 className="size-4 animate-spin" />
                        )}
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="flex items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <LogOut className="size-5 text-muted-foreground" />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-tight">
                  Leave organization
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isOwner
                    ? "You are the owner — transfer ownership to another member before leaving."
                    : "You will lose access to this workspace's projects and builds."}
                </p>
              </div>
            </div>
            <Button
              variant="destructive"
              onClick={handleLeave}
              disabled={isOwner || leaving}
            >
              {leaving && <Loader2 className="size-4 animate-spin" />}
              Leave
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Invite member</DialogTitle>
            <DialogDescription>
              Inviting to {activeOrganization.name}. Share the generated link
              with the invitee.
            </DialogDescription>
          </DialogHeader>
          {invitationLink ? (
            <div className="grid gap-3 py-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 shrink-0 text-green-600" />
                <p className="text-sm">
                  Invitation created. Share this link with the invitee:
                </p>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 truncate rounded-md border bg-muted px-3 py-2 text-xs">
                  {invitationLink}
                </code>
                <Button variant="outline" size="sm" onClick={copyInvitationLink}>
                  <Copy className="size-4" />
                  Copy
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label htmlFor="invite-email-input">Email</Label>
                <Input
                  id="invite-email-input"
                  type="email"
                  placeholder="teammate@example.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  disabled={inviting}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="invite-role-select">Role</Label>
                <Select
                  value={inviteRole}
                  onValueChange={(value) => setInviteRole(value as "admin" | "member")}
                >
                  <SelectTrigger id="invite-role-select">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            {invitationLink ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => navigate({ to: "/settings/organization" })}
                >
                  Done
                </Button>
                <Button
                  onClick={() => { setInvitationLink(null); setInviteEmail(""); }}
                >
                  <Mail className="size-4" />
                  Invite another
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => setInviteOpen(false)}
                  disabled={inviting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleInvite}
                  disabled={inviting || !inviteEmail.trim()}
                >
                  {inviting && <Loader2 className="size-4 animate-spin" />}
                  Send invitation
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
