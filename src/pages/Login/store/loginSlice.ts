// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface LoginState {
//   email: string;
//   password: string;
// }

// const initialState: LoginState = {
//   email: "",
//   password: "",
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     setEmail(state, action: PayloadAction<string>) {
//       state.email = action.payload;
//     },
//     setPassword(state, action: PayloadAction<string>) {
//       state.password = action.payload;
//     },
//   },
// });

// export const { setEmail, setPassword } = loginSlice.actions;
// export default loginSlice.reducer;

// if (login === "123" && password === "123") {
//   fullfilled;
// }

import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

// Мокированные данные
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "123456" },
  { id: 2, name: "Jane Doe", email: "jane@example.com", password: "password" },
];

// Создаем API-сервис с использованием моков
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(), // Используем фейковый запрос
  endpoints: (builder) => ({
    // Пример запроса для получения списка пользователей
    getUsers: builder.query({
      queryFn: () => {
        return { data: mockUsers };
      },
    }),
    // Эндпоинт для проверки логина пользователя
    loginUser: builder.mutation({
      queryFn: ({ email, password }) => {
        const user = mockUsers.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          return { data: user }; // Возвращаем найденного пользователя
        }
        return {
          error: { status: 404, message: "Неправильный email или пароль!" },
        }; // Ошибка, если пользователь не найден
      },
    }),
  }),
});

// Экспортируем хук для использования в компонентах
export const { useGetUsersQuery, useLoginUserMutation } = apiSlice;
