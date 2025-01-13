import { IProductType } from "~/types/dto/products";

export const PRODUCT = "product";
export type PRODUCT = typeof PRODUCT; // Typescript line

export type ProductStateType = {
  products: IUserState;
};

export type IUserState = {
  data: Array<IProductType>;
  isLoading: boolean;
  errors: string;
};

export const GET_PRODUCTS = `${PRODUCT}/getProductsAction`;
export type GET_PRODUCTS = typeof GET_PRODUCTS;

export const REGISTER = `${PRODUCT}/registerAction`;
export type REGISTER = typeof REGISTER;
