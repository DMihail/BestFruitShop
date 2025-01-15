import axios from "../utils/index";

type Params = {
  slug: string;
};
export default async function getProductsBySlug({ slug }: Params) {
  return await axios.get<Response>(`/products?slug=${slug}`);
}
