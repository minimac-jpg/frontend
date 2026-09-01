import { authClient } from "@/lib/auth-client";

export interface WorkspaceOption {
  id: string;
  name: string;
  slug?: string | null;
  kind: "personal" | "organization";
}

export function useWorkspace() {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const {
    data: organizations,
    isPending: organizationsPending,
    error: organizationsError,
    refetch,
  } = authClient.useListOrganizations();

  const user = session?.user ?? null;
  const activeOrganizationId = session?.session?.activeOrganizationId ?? null;
  const activeOrganization =
    organizations?.find((org) => org.id === activeOrganizationId) ?? null;
  const isPersonal = activeOrganization === null;

  const personalWorkspace: WorkspaceOption | null = user
    ? {
        id: user.id,
        name: user.name || user.email,
        kind: "personal",
      }
    : null;

  const workspaces: WorkspaceOption[] = organizations
    ? organizations.map((org) => ({
        id: org.id,
        name: org.name,
        slug: org.slug,
        kind: "organization" as const,
      }))
    : [];

  async function setActiveOrganization(organizationId: string | null) {
    const { error } = await authClient.organization.setActive({
      organizationId,
    });
    if (error) {
      throw error;
    }
  }

  async function createOrganization(input: { name: string; slug: string }) {
    const { data, error } = await authClient.organization.create({
      name: input.name,
      slug: input.slug,
    });
    if (error) {
      throw error;
    }
    return data;
  }

  return {
    user,
    session,
    activeOrganizationId,
    activeOrganization,
    isPersonal,
    personalWorkspace,
    workspaces,
    isLoading: sessionPending || organizationsPending,
    organizationsError,
    refetch,
    setActiveOrganization,
    createOrganization,
  };
}
