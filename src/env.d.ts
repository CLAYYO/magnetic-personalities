/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CLOUDINARY_CLOUD_NAME: string;
  readonly CLOUDINARY_UNSIGNED_PRESET: string;
  readonly SNIPCART_PUBLIC_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    fabric: any;
    Snipcart: any;
  }
}