import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.vatcomply.com",
  timeout: 5000,
});

export default apiClient;
