import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authUser } from "../../interfaces/authTypes";

interface UserState {
  user: authUser | null;
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<authUser>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
