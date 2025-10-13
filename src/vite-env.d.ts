/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBHOOK_URL: string;   // ex.: https://seu-n8n.com/webhook-test/eduka-contact
  readonly VITE_WEBHOOK_KEY?: string;  // opcional (Header Auth no n8n)
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
