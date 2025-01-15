import { IProductType } from "~/types/dto/products";

export const PRODUCT = "product";
export type PRODUCT = typeof PRODUCT; // Typescript line

export type ProductStateType = {
  products: IProductsState;
  productsBySlug: IProductsBySlugState;
};

export type IProductsState = {
  data: Array<IProductType>;
  isLoading: boolean;
  errors: string;
};

export type IProductsBySlugState = {
  data: Array<{ slug: string; products: IProductType }>;
  isLoading: boolean;
  errors: string;
};

export const SEARCH_PRODUCTS = `${PRODUCT}/searchProductsAction`;
export type SEARCH_PRODUCTS = typeof SEARCH_PRODUCTS;

export const GET_PRODUCTS_BY_SLUG = `${PRODUCT}/getProductsBySlugAction`;
export type GET_PRODUCTS_BY_SLUG = typeof GET_PRODUCTS_BY_SLUG;
