import axios from "../utils/index";

type Params = {
  title: string;
};
export default async function getGoods({ title }: Params) {
  return await axios.get<Response>(`goods?title=${title}`);
}
