import axios from "axios";

const api = axios.create({
  baseURL: "https://67847eea1ec630ca33a49221.mockapi.io/eventos",
});

export default api;
