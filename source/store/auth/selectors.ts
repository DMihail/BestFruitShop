import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store/root";

export const selectAuth = (state: RootState) => state.auth;

export const loginSelector = createSelector([selectAuth], (data) => ({
  isLoading: data.login.isLoading,
  error: data.login.error,
}));

export const registerSelector = createSelector([selectAuth], (data) => ({
  isLoading: data.register.isLoading,
  error: data.register.error,
}));

export const isAuthorizedSelector = createSelector(
  [selectAuth],
  (data) => data.isAuthorized
);
