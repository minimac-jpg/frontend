/**
 * Production server for TanStack Start (Rsbuild build output).
 *
 * The built SSR bundle (dist/server/index.js) exports a fetch handler but
 * does not serve client assets, so this wraps it: static files under
 * dist/client are served by Bun's native file handling and everything else
 * is forwarded to the SSR handler.
 *
 * https://tanstack.com/start/latest/docs/framework/react/guide/hosting
 */
import path from "node:path";

const CLIENT_DIR = path.resolve(import.meta.dir, "dist/client");
const PORT = Number(process.env.PORT ?? 3000);

const handler = (await import("./dist/server/index.js")).default as {
  fetch: (req: Request) => Response | Promise<Response>;
};

const MIME: Record<string, string> = {
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json",
  ".map": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function contentType(file: string): string {
  return MIME[path.extname(file)] ?? "application/octet-stream";
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    if (req.method === "GET" || req.method === "HEAD") {
      const pathname = decodeURIComponent(new URL(req.url).pathname);
      const relative = pathname.replace(/^\/+/, "");
      const absolute = path.resolve(CLIENT_DIR, relative);
      // Only serve files that actually live inside dist/client
      if (absolute.startsWith(CLIENT_DIR + path.sep)) {
        const file = Bun.file(absolute);
        if (await file.exists()) {
          // Hashed build assets are immutable; anything else is short-lived
          const immutable = pathname.startsWith("/assets/");
          return new Response(req.method === "HEAD" ? null : file, {
            headers: {
              "Content-Type": contentType(absolute),
              "Cache-Control": immutable
                ? "public, max-age=31536000, immutable"
                : "public, max-age=300",
            },
          });
        }
      }
    }
    return handler.fetch(req);
  },
  error: () => new Response("Internal Server Error", { status: 500 }),
});
