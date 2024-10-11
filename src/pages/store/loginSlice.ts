import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Интерфейс для пользователя
interface User {
  id: number;
  name: string;
  email: string;
}

// Интерфейс для логина
interface LoginPayload {
  email: string;
  password: string;
}

// Интерфейс для ответа на запрос логина
interface LoginResponse {
  user: User;
}

// Интерфейс для изображений
export interface Image {
  id: number;
  url: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL, 
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    // Обработка ошибок
    fetchFn: async (input, init) => {
      const response = await fetch(input, init);
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Ошибка: ${response.status} - ${error}`);
      }
      return response;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    loginUser: builder.mutation<LoginResponse, LoginPayload>({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    getImages: builder.query<Image[], void>({
      query: () => '/uploads',
    }),
  }),
});

export const { useGetUsersQuery, useLoginUserMutation, useGetImagesQuery } = apiSlice;
