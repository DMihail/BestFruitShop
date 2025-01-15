import axios from "axios";
import Config from "react-native-config";

const instance = axios.create({
  baseURL: `${Config.BASE_API}/api/v1`,
  timeout: 30 * 1000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
