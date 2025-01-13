import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthAction, USER, UsersStateType, UserType } from "./types";

const initialState: UsersStateType = {
  user: {
    data: null,
    isLoading: false,
    errors: "",
  },
};

export const usersSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    loginAction: (state: UsersStateType, action: PayloadAction<AuthAction>) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    registerAction: (
      state: UsersStateType,
      action: PayloadAction<AuthAction>
    ) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    getUserSuccessAction: (
      state: UsersStateType,
      { payload: user }: PayloadAction<UserType>
    ) => {
      state.user.isLoading = false;
      state.user.data = user;
    },
    getUserErrorAction: (
      state: UsersStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
});

export const {
  loginAction,
  registerAction,
  getUserSuccessAction,
  getUserErrorAction,
} = usersSlice.actions;

export default usersSlice.reducer;
