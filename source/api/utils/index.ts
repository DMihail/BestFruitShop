import axios from "axios";

const instance = axios.create({
  baseURL: "https://6785187d1ec630ca33a72e5a.mockapi.io/api/v1",
  timeout: 30 * 1000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
