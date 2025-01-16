import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductType } from "~/types";

import { CART, CartStateType } from "./types";

const initialState: CartStateType = {
  data: null,
};

export const cartSlice = createSlice({
  name: CART,
  initialState,
  reducers: {
    addProductAction: (
      state: CartStateType,
      action: PayloadAction<IProductType>
    ) => {
      state.data = { ...action.payload, quantity: 1 };
    },
    removeProductAction: (state: CartStateType, action: PayloadAction) => {
      state.data = null;
    },
    updateProductQuantityAction: (
      state: CartStateType,
      action: PayloadAction<number>
    ) => {
      if (state.data) {
        state.data.quantity = action.payload;
      }
    },
  },
});

export const {
  addProductAction,
  removeProductAction,
  updateProductQuantityAction,
} = cartSlice.actions;

export default cartSlice.reducer;
