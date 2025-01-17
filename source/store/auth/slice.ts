/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH, AuthAction, AuthStateType } from './types';

const initialState: AuthStateType = {
  isAuthorized: false,
  login: {
    isLoading: false,
    error: null,
  },
  register: {
    isLoading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    loginAction: (state: AuthStateType, action: PayloadAction<AuthAction>) => {
      state.login.isLoading = true;
      state.login.error = null;
    },
    loginSuccessAction: (state: AuthStateType) => {
      state.isAuthorized = true;
      state.login.isLoading = false;
      state.login.error = null;
    },
    loginErrorAction: (state: AuthStateType, { payload: error }: PayloadAction<Error>) => {
      state.login.isLoading = false;
      state.login.error = error;
    },

    registerAction: (state: AuthStateType, action: PayloadAction<AuthAction>) => {
      state.register.isLoading = true;
      state.register.error = null;
    },

    registerSuccessAction: (state: AuthStateType) => {
      state.isAuthorized = true;
      state.register.error = null;
      state.register.isLoading = false;
    },
    registerErrorAction: (state: AuthStateType, { payload: error }: PayloadAction<Error>) => {
      state.register.isLoading = false;
      state.register.error = error;
    },
  },
});

export const {
  loginAction,
  registerAction,
  loginSuccessAction,
  loginErrorAction,
  registerSuccessAction,
  registerErrorAction,
} = authSlice.actions;

export default authSlice.reducer;
