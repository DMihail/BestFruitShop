export type ProductSlug = "popular" | "common" | "best";

export interface IProductType {
  title: string;
  image: string;
  price: number;
  slug: ProductSlug;
  id: string;
}
