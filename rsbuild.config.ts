import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/rsbuild";

export default defineConfig({
  plugins: [
    pluginReact(),
    tanstackStart(),
  ],
  tools: {
    rspack: (config, { rspack }) => {
      // better-auth's optional OTel instrumentation is dynamically imported
      // with a .catch() guard — safe to treat as absent.
      config.plugins!.push(
        new rspack.IgnorePlugin({ resourceRegExp: /^@opentelemetry\/api$/ }),
      );
    },
  },
  server: {
    // keep clear of the gateway on :8080
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        // better-auth (stealth) is served by this app's server routes — skip proxy
        bypass: (req) => {
          if (req.url?.startsWith("/api/session")) return req.url;
          return undefined;
        },
      },
    },
  },
});
