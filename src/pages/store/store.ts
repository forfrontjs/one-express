import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./loginSlice"; 
import { adminSlice } from "./AdminSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    [adminSlice.reducerPath]: adminSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, adminSlice.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

