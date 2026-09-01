import { createAuthClient } from "better-auth/react";
import {
    adminClient,
    jwtClient,
    organizationClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
    basePath: "/api/session",
    plugins: [
        adminClient(),
        organizationClient(),
        jwtClient({
            jwks: {
                jwksPath: "/.well-known/jwks.json",
            },
        }),
    ],
});
