import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductType } from "~/types";

import { CART, CartStateType } from "./types";

const initialState: CartStateType = {
  data: [],
};

export const cartSlice = createSlice({
  name: CART,
  initialState,
  reducers: {
    addProductAction: (
      state: CartStateType,
      action: PayloadAction<IProductType>
    ) => {
      state.data.push(action.payload);
    },
    removeProductAction: (
      state: CartStateType,
      action: PayloadAction<{ index: number }>
    ) => {
      state.data.splice(action.payload.index, 1);
    },
    updateProductAction: (
      state: CartStateType,
      action: PayloadAction<{ index: number; product: IProductType }>
    ) => {
      state.data.splice(action.payload.index, 1, action.payload.product);
    },
  },
});

export const { addProductAction, removeProductAction, updateProductAction } =
  cartSlice.actions;

export default cartSlice.reducer;
