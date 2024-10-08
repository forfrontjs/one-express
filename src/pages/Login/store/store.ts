// import { configureStore } from "@reduxjs/toolkit";
// import loginSlice from "./loginSlice";

// export const store = configureStore({
//   reducer: {
//     loginSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

import { configureStore } from "@reduxjs/toolkit";
// import loginSlice from "./loginSlice";
import { apiSlice } from "./loginSlice"; // Импортируем mock API slice

export const store = configureStore({
  reducer: {
    // login: loginSlice, // Ваш логин-слайс
    [apiSlice.reducerPath]: apiSlice.reducer, // Добавляем редьюсер для mock API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Добавляем middleware для mock API
});

// Типизация состояния и dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// // Если нужно настроить тип для middleware, используем это:
// export type AppMiddleware = ReturnType<typeof store.getState>;
