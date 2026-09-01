// Mirror identity-plane facts (personal workspaces, organizations, members)
// to the platform plane (harlie-tenancy). The platform plane owns quotas,
// usage, plans, and suspension; the identity plane owns who exists and who
// belongs where.
//
// Failures throw: a user/org that exists in better-auth but not in tenancy
// breaks the "every tenant is provisioned" invariant, which is worse than a
// failed request.

const TENANCY_URL =
    process.env.HARLIE_TENANCY_URL ?? "http://127.0.0.1:3003";
const INTERNAL_TOKEN = process.env.HARLIE_TENANCY_INTERNAL_TOKEN ?? "dev-service-token";

export type TenancyProvisioning =
    | { kind: "personal"; id: string; name: string }
    | { kind: "org"; id: string; name: string; slug: string }
    | { kind: "member"; tenantId: string; userId: string; role: string }
    | { kind: "member-removed"; tenantId: string; userId: string };

async function request(path: string, body: unknown): Promise<void> {
    const res = await fetch(`${TENANCY_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${INTERNAL_TOKEN}`,
        },
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
            `tenancy sync failed (${res.status}) ${path}: ${text.slice(0, 300)}`,
        );
    }
}

export async function provisionTenancy(event: TenancyProvisioning): Promise<void> {
    // Retry: a transient tenancy outage must not leave a user/org without a
    // platform record ("every identity has a tenant" invariant).
    let lastError: unknown;
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            await call(event);
            return;
        } catch (error) {
            lastError = error;
            await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
        }
    }
    throw lastError;
}

async function call(event: TenancyProvisioning): Promise<void> {
    switch (event.kind) {
        case "personal":
            // Personal workspace: tenant id = user id, no slug (single-user
            // tenants are addressed by id).
            await request("/api/internal/tenants", {
                id: event.id,
                display_name: event.name,
                kind: "personal",
            });
            break;
        case "org":
            await request("/api/internal/tenants", {
                id: event.id,
                display_name: event.name,
                slug: event.slug,
                kind: "org",
            });
            break;
        case "member":
            await request(`/api/internal/tenants/${event.tenantId}/members`, {
                user_id: event.userId,
                role: event.role,
            });
            break;
        case "member-removed":
            await request(
                `/api/internal/tenants/${event.tenantId}/members/${event.userId}/remove`,
                {},
            );
            break;
    }
}
