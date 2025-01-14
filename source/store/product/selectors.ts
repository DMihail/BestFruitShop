import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";
import { IProductType } from "~/types";

export const productsSelector = createSelector(
  (state: RootState) => state.products.products.data,
  (data: Array<IProductType>) => data
);
