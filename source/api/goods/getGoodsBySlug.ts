import axios from "../utils/index";

type Params = {
  slug: string;
};
export default async function getGoodsBySlug({ slug }: Params) {
  return await axios.get<Response>(`goods?slug=${slug}`);
}
