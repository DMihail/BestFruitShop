import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";

export const selectProduct = (state: RootState) => state.products;

export const productsSelector = createSelector(
  [selectProduct],
  (data) => data.products.data
);
