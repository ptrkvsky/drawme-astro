/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
  readonly MODE: 'development' | 'production';
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly PUBLIC_SANITY_API_VERSION: string;
  readonly PUBLIC_SANITY_READ_TOKEN: string;
  readonly SANITY_READ_TOKEN: string;
  readonly PUBLIC_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
