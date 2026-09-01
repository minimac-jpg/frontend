declare global {
  interface ImportMetaEnv {
    readonly PUBLIC_API_BASE_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const env = import.meta.env;

export const apiConfig = {
  baseUrl: env.PUBLIC_API_BASE_URL ?? "/api",
  timeout: 30_000,
} as const;
