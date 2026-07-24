/// <reference types="vite/client" />

/**
 * Typed environment variables.
 * All env vars must be prefixed with VITE_ to be exposed to the client.
 * Define actual values in .env.local (never committed to git).
 * Define shapes here and in src/config/env.ts.
 */
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_APP_ENV: 'development' | 'staging' | 'production'
  readonly VITE_ENABLE_MOCKS: string
  readonly VITE_ENABLE_DEVTOOLS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
