/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APP_AUTH0_DOMAIN: string;
  readonly APP_AUTH0_CLIENT_ID: string;
  readonly APP_AUTH0_AUDIENCE: string;
  readonly APP_VERSION: string;
  readonly APP_IMAGE_TAG: string;
  readonly APP_COMMIT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
