import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductType } from "~/types/dto/products";

import { PRODUCT, ProductStateType } from "./types";

const initialState: ProductStateType = {
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
    getProductsAction: (
      state: ProductStateType,
      action: PayloadAction<{ title: string }>
    ) => {
      state.products.isLoading = true;
      state.products.errors = "";
    },
    getProductsSuccessAction: (
      state: ProductStateType,
      { payload: { data } }: PayloadAction<{ data: Array<IProductType> }>
    ) => {
      state.products.isLoading = false;
      state.products.data = data;
    },
    getProductsErrorAction: (
      state: ProductStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.products.isLoading = false;
      state.products.errors = error;
    },
  },
});

export const {
  getProductsAction,
  getProductsSuccessAction,
  getProductsErrorAction,
} = productSlice.actions;

export default productSlice.reducer;
