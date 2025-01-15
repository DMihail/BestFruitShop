import axios from "../utils/index";

type Params = {
  title: string;
};
export default async function searchProducts({ title }: Params) {
  return await axios.get<Response>(`/products?title=${title}`);
}
