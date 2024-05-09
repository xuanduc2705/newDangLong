import axios from "axios";

export const clientApi = axios.create({
  baseURL: "https://lombeo-api-authorize.azurewebsites.net",
  timeout: 10000,
});

clientApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token1");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

clientApi.interceptors.response.use(
  async function (res) {
    return res.data;
  },
  async function (error) {}
);
