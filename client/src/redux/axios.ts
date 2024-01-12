import axios from "axios";

const BASE_URL = "https://youngking-mikeshop-api.onrender.com/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
