/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_IMAGE_API_URL: string; // URL для получения массива картинок
  readonly VITE_APP_URL: string; // Ваш основной URL приложения
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
