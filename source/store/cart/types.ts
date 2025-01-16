import { IProductType } from "~/types/dto/products";

export const CART = "cart";
export type CART = typeof CART;

export type CartProductExtraType = {
  quantity: number;
};

export type CartDataType = IProductType & CartProductExtraType;

export type CartStateType = {
  data: CartDataType | null;
};
