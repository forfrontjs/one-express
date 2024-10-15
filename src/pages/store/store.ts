import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./loginSlice"; 
import { adminApi } from "./AdminSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    [adminApi.reducerPath]: adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, adminApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

