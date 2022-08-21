/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
  [x: string]: any;
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
