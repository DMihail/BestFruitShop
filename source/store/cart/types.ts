import { IProductType } from "~/types/dto/products";

export const CART = "cart";
export type CART = typeof CART;

export type CartStateType = {
  data: Array<IProductType>;
};
