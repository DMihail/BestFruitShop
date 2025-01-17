import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store/root";

export const selectCart = (state: RootState) => state.cart;

export const cartSelector = createSelector([selectCart], (data) => data.data);
