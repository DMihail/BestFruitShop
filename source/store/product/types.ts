import { IProductType, ProductSlug } from "~/types/dto/products";

export const PRODUCT = "product";
export type PRODUCT = typeof PRODUCT; // Typescript line

export type ProductStateType = {
  products: IProductsState;
  productsBySlug: IProductsBySlugState;
};

export type IProducts = Array<IProductType>;

export type IProductsState = {
  data: IProducts;
  isLoading: boolean;
  errors: string;
};

export type IProductBySlug = {
  slug?: ProductSlug;
  products?: IProducts;
};

export type IProductsBySlug = Array<IProductBySlug>;

export type IProductsBySlugState = {
  data: IProductsBySlug;
  isLoading: boolean;
  errors: string;
};

export const SEARCH_PRODUCTS = `${PRODUCT}/searchProductsAction`;
export type SEARCH_PRODUCTS = typeof SEARCH_PRODUCTS;

export const GET_PRODUCTS_BY_SLUG = `${PRODUCT}/getProductsBySlugAction`;
export type GET_PRODUCTS_BY_SLUG = typeof GET_PRODUCTS_BY_SLUG;
