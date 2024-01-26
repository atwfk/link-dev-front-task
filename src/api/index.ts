import axios from "axios";

const api = axios.create({
  baseURL: "https://api.npoint.io",
});

export default api;
