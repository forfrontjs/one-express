import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AuthResponseLocal,
  User,
  mapAuthResponseToUser,
} from "../../interfaces/authTypes";
import { setUser } from "./RouteSlice";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

interface NewUser {
  email: string;
  name: string;
  phone: string;
  residenceCity: string;
  password: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: "test/auth/login",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", data.access_token);

          // Получение данных пользователя с использованием нового интерфейса
          let userResponse = await dispatch(
            apiSlice.endpoints.getLoginUser.initiate()
          );

          if (userResponse.data) {
            const user: User = mapAuthResponseToUser(
              userResponse.data as AuthResponseLocal
            );
            dispatch(setUser(user));
          }
        } catch (error) {
          console.error("Ошибка при сохранении токена:", error);
        }
      },
    }),
    getLoginUser: builder.query<AuthResponseLocal, void>({
      query: () => ({
        url: "/users/info",
        method: "GET",
      }),
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
  useGetLoginUserQuery,
} = apiSlice;
