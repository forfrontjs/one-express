import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminSlice = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL, // Используем URL из env-файла
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "multipart/form-data");
      return headers; // Возвращаем заголовки после изменения
    },
  }),
  endpoints: (builder) => ({
    // Пример эндпоинта для загрузки файла
    uploadFile: builder.mutation({
      query: (file) => ({
        url: "/uploads", // Путь к эндпоинту на бекенде
        method: "POST",
        body: file, // Отправляем файл в теле запроса
      }),
    }),
  }),
});

export const { useUploadFileMutation } = adminSlice;
