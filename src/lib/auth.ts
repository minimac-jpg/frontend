import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { admin, jwt, organization } from "better-auth/plugins";
import { APIError } from "better-auth/api";
import { and, eq } from "drizzle-orm";
import { db } from "../db";
import { member } from "../../db/schema";
import { provisionTenancy } from "./tenancy-sync";

// Bootstrap admin user ids (promoted in the harlie_web user table).
const adminUserIds = (process.env.HARLIE_ADMIN_USER_IDS ?? "zg9K3rXxVxTnPAzrzd0xS6cSObpMUMtk")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:5173",
    trustedOrigins: [
        process.env.BETTER_AUTH_URL,
        "http://localhost:5173",
        "http://localhost:8080",
    ].filter((o): o is string => !!o),
    basePath: "/api/session",
    advanced: {
        cookiePrefix: "harlie",
        database: {
            // Platform ids must be UUIDs: every service's tenant/owner columns
            // are UUID-typed and JWT subjects flow into them directly.
            generateId: "uuid",
        },
    },
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword: {
        enabled: true,
        // Hard-off knob for account creation (deploy with "false"; flip to
        // "true" to close even allowlisted signups). The allowlist below is
        // the standing closed-beta policy.
        disableSignUp: process.env.HARLIE_DISABLE_SIGNUP === "true",
    },
    databaseHooks: {
        // Every identity must be a personal tenant or an org: mirror to the
        // platform plane (harlie-tenancy) so quotas/usage/suspension apply.
        // NOTE: organization/member lifecycle does NOT go through
        // databaseHooks (the organization plugin writes via its own adapter,
        // bypassing model hooks) — see the endpoint hooks below.
        user: {
            create: {
                after: async (user) => {
                    await provisionTenancy({
                        kind: "personal",
                        id: user.id,
                        name: user.name || user.email,
                    });
                },
            },
        },
    },
    hooks: {
        before: async (rawCtx: unknown) => {
            // Closed-beta signup policy: only allowlisted emails may create
            // accounts. Enforced server-side (the UI cannot bypass it).
            // HARLIE_SIGNUP_ALLOWLIST: comma-separated emails; empty/unset
            // rejects everyone. Returning nothing passes the request through.
            const ctx = rawCtx as {
                path?: string;
                body?: { email?: string };
            };
            if (ctx.path !== "/sign-up/email") return;
            const allowlist = (process.env.HARLIE_SIGNUP_ALLOWLIST ?? "")
                .split(",")
                .map((e) => e.trim().toLowerCase())
                .filter(Boolean);
            const email = String(ctx.body?.email ?? "").trim().toLowerCase();
            if (!allowlist.includes(email)) {
                throw new APIError("FORBIDDEN", {
                    message: "Signups are currently closed",
                });
            }
        },
        after: async (rawCtx: unknown): Promise<{ headers: Headers }> => {
            // Org creation → provision the platform tenant record. The
            // creator becomes owner in better-auth's member table (the
            // source of truth for membership); tenancy tracks only the
            // platform record. NOTE: this must be an endpoint hook — the
            // organization plugin bypasses databaseHooks model hooks.
            // The runtime context carries `path` and `context.returned`
            // (better-auth dispatch), but the published MiddlewareInputContext
            // type omits them, hence the local shape. Dispatch always merges
            // the returned `headers`, so never return bare undefined.
            const ok = { headers: new Headers() };
            const ctx = rawCtx as {
                path?: string;
                context?: { returned?: unknown };
            };
            console.log(`[hook] after ctx.path=${ctx.path ?? "<none>"}`);
            if (!ctx.path?.includes("/organization/create")) return ok;
            const returned = ctx.context?.returned as
                | Response
                | { id?: string; name?: string; slug?: string }
                | undefined;
            if (!returned) return ok;
            const org =
                returned instanceof Response
                    ? ((await returned.clone().json().catch(() => null)) as
                          | { id?: string; name?: string; slug?: string }
                          | null)
                    : returned;
            if (!org?.id) return ok;
            await provisionTenancy({
                kind: "org",
                id: org.id,
                name: org.name ?? org.slug ?? "organization",
                slug: org.slug ?? "",
            });
            return ok;
        },
    },
    plugins: [
        admin({
            adminUserIds,
        }),
        organization({
            // Invitations are sent out-of-band (the UI shows the invitation
            // link); email sending is not configured.
            sendInvitationEmail: async ({ invitation, organization: org }) => {
                console.log(
                    `[invitation] ${invitation.email} invited to ${org.name} (${invitation.id})`,
                );
            },
        }),
        jwt({
            jwks: {
                keyPairConfig: { alg: "RS256" },
                jwksPath: "/.well-known/jwks.json",
            },
            jwt: {
                issuer: "harlie-identity",
                expirationTime: "15m",
                definePayload: async ({ user, session }) => {
                    // Tenant scope: the active organization when the session
                    // is acting as one, otherwise the user's personal tenant.
                    // sub always stays the user id (actor identity).
                    const activeOrgId = session.activeOrganizationId ?? null;
                    let orgRole: string | null = null;
                    if (activeOrgId) {
                        const rows = await db
                            .select({ role: member.role })
                            .from(member)
                            .where(
                                and(
                                    eq(member.organizationId, activeOrgId),
                                    eq(member.userId, user.id),
                                ),
                            )
                            .limit(1);
                        orgRole = rows[0]?.role ?? null;
                    }
                    return {
                        email: user.email,
                        role: (user as { role?: string }).role ?? "user",
                        tenant_id: activeOrgId ?? user.id,
                        // "personal" when acting on the user's own workspace;
                        // the org member role (owner/admin/member) otherwise.
                        org_role: activeOrgId ? (orgRole ?? "member") : "personal",
                    };
                },
            },
        }),
        tanstackStartCookies(),
    ],
});
