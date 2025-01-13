import { AuthParams } from "~/api/auth/login";

import axios from "../utils/index";

export default async function register(data: AuthParams) {
  return await axios.post<Response>(`/users`, data);
}
