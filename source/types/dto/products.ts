export type ProductSlug = "popular" | "common" | "best";

export interface IProductType {
  id: string;
  createdAt: string;
  imageUrl: string;
  price: string;
  slug: ProductSlug;
  title: string;
  updateAt: string;
}
