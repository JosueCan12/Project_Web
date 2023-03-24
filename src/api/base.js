import axios from "axios";

const api = axios.create({
  baseURL: "https://pandeliapi-production-2d83.up.railway.app/api",
  // baseURL: "https://pandeliapi-production.up.railway.app/api",
  // baseURL: "http://localhost:3000/api",
});

export default api;