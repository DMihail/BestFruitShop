import axios from "../utils/index";

export type AuthParams = {
  email: string;
  password: string;
};
export default async function login({ email, password }: AuthParams) {
  return await axios.get<Response>(
    `/users?email=${email}&password=${password}`
  );
}
