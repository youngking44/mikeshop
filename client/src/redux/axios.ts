import axios from "axios";

const BASE_URL = "https://youngking-mikeshop-api.onrender.com/api";
// const BASE_URL = "http://localhost:3000/api";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
