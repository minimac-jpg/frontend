import { createFileRoute } from "@tanstack/react-router";
import { auth } from "../../../lib/auth";

export const Route = createFileRoute("/api/session/$")({
    server: {
        handlers: {
            GET: async ({ request }) => await auth.handler(request),
            POST: async ({ request }) => await auth.handler(request),
        },
    },
});
