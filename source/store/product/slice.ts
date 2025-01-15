import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductType } from "~/types/dto/products";

import { PRODUCT, ProductStateType } from "./types";

const initialState: ProductStateType = {
  productsBySlug: {
    data: [],
    isLoading: false,
    errors: "",
  },
  products: {
    data: [],
    isLoading: false,
    errors: "",
  },
};

export const productSlice = createSlice({
  name: PRODUCT,
  initialState,
  reducers: {
    searchProductsAction: (
      state: ProductStateType,
      action: PayloadAction<{ title: string }>
    ) => {
      state.products.isLoading = true;
      state.products.errors = "";
    },
    searchProductsSuccessAction: (
      state: ProductStateType,
      { payload: { data } }: PayloadAction<{ data: Array<IProductType> }>
    ) => {
      state.products.isLoading = false;
      state.products.data = data;
    },
    searchProductsErrorAction: (
      state: ProductStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.products.isLoading = false;
      state.products.errors = error;
    },
    getProductsBySlugAction: (state: ProductStateType) => {
      state.products.isLoading = true;
      state.products.errors = "";
    },
  },
});

export const {
  searchProductsAction,
  searchProductsSuccessAction,
  searchProductsErrorAction,
  getProductsBySlugAction,
} = productSlice.actions;

export default productSlice.reducer;
