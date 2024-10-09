import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Если пароль не нужен в API, можно убрать это поле
}

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users", 
    }),
    loginUser: builder.mutation<LoginResponse, LoginPayload>({
      query: ({ email, password }) => ({
        url: "/login", 
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});


export const { useGetUsersQuery, useLoginUserMutation } = apiSlice;
