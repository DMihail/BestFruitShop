import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";

export const selectProduct = (state: RootState) => state.users;

export const userIsLoadingSelector = createSelector(
  [selectProduct],
  (data) => data.isLoading
);

export const isAuthorizedSelector = createSelector(
  [selectProduct],
  (data) => !!data.data
);
