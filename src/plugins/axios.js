import axios from "axios";
import router from "@/router";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://159.89.235.180:3000/",
});

export const setAuthHeaders = () => {
  const auth_token = localStorage.getItem("user-token") || "";
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${auth_token}`;
};

setAuthHeaders();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.request;

    if (status === 401) {
      store.dispatch("logout");

      setTimeout(() => {
        router.push({
          name: "authorization",
        });
      });
    }

    return Promise.reject(error.response);
  }
);

export default axiosInstance;
