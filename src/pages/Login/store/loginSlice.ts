import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  residenceCity: string;
  role: "user_role";
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

interface NewUser {
  email: string;
  name: string;
  phone: string;
  address: string;
  password: string;
}

export interface Image {
  id: number;
  url: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: "test/auth/login",
        method: "POST",
        body: { email, password },
      }),
      transformResponse: (response: {
        user: User;
        access_token: string;
      }): LoginResponse => {
        console.log(response);

        localStorage.setItem("accesToken", response.access_token);

        return {
          user: response.user,
          token: response.access_token,
        };
      },
    }),

    registerUser: builder.mutation<User, NewUser>({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      transformResponse: (response: { user: User }) => response.user,
    }),

    getImages: builder.query<Image[], void>({
      query: () => "/uploads",
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetImagesQuery,
} = apiSlice;
