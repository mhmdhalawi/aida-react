import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

const baseURL = import.meta.env?.VITE_APP_BACKEND_URL;

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10s
});

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  errorHandler
);

function errorHandler(error: any) {
  if (error?.response) {
    const { status } = error.response;
    console.error(`API Error: ${status}`, error.response.data);
  }
  return Promise.reject(error);
}

export default api;
