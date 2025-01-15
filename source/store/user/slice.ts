import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthAction, USER, UsersStateType, UserType } from "./types";

const initialState: UsersStateType = {
  data: null,
  isLoading: false,
  errors: "",
};

export const usersSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    loginAction: (state: UsersStateType, action: PayloadAction<AuthAction>) => {
      state.isLoading = true;
      state.errors = "";
    },
    registerAction: (
      state: UsersStateType,
      action: PayloadAction<AuthAction>
    ) => {
      state.isLoading = true;
      state.errors = "";
    },
    getUserSuccessAction: (
      state: UsersStateType,
      { payload: user }: PayloadAction<UserType>
    ) => {
      state.isLoading = false;
      state.data = user;
    },
    getUserErrorAction: (
      state: UsersStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
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
