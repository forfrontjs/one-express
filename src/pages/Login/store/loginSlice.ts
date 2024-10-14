import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface NewUser {
  name: string;
  email: string;
  password: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, LoginRequest>({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
      transformResponse: (response: { user: User }) => response.user,
    }),

    registerUser: builder.mutation<User, NewUser>({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
      transformResponse: (response: { user: User }) => response.user,
    }),
  }),
});
export const {
  // useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = apiSlice;
