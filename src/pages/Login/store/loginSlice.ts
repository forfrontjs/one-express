import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  name: string;
  email: string;
  password: string;
}

interface NewUser {
  name: string;
  email: string;
  password: string;
}

const getUsersFromLocalStorage = (): User[] => {
  return JSON.parse(localStorage.getItem("mockUsers") || "[]");
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      queryFn: () => {
        const users = getUsersFromLocalStorage();
        return { data: users };
      },
    }),
    loginUser: builder.mutation<User, { email: string; password: string }>({
      queryFn: ({ email, password }) => {
        const users = getUsersFromLocalStorage();
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          return { data: user };
        }
        return {
          error: { status: 404, message: "Неправильный email или пароль!" },
        };
      },
    }),
    registerUser: builder.mutation<User, NewUser>({
      queryFn: (newUser) => {
        let users: User[] = getUsersFromLocalStorage();
        const existingUser = users.find((user) => user.email === newUser.email);
        if (existingUser) {
          return {
            error: {
              status: 409,
              message: "Пользователь с таким email уже существует!",
            },
          };
        }

        users.push(newUser);

        return { data: newUser };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = apiSlice;
