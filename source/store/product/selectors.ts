import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";

export const selectProduct = (state: RootState) => state.products;

export const productsSelector = createSelector([selectProduct], (data) => ({
  products: data.products.data,
  isLoading: data.products.isLoading,
}));

export const productsBySlugSelector = createSelector(
  [selectProduct],
  (data) => ({
    products: data.productsBySlug.data,
    isLoading: data.productsBySlug.isLoading,
  })
);

export const isSearchProductsSelector = createSelector(
  [selectProduct],
  (data) => !!data.products.searchTitle
);
