import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/health")({
    server: {
        handlers: {
            GET: async () =>
                new Response(JSON.stringify({ status: "ok", service: "frontend" }), {
                    headers: { "Content-Type": "application/json" },
                }),
        },
    },
});
