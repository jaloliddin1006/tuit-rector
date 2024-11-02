import axios from "axios";


const axiosT = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

axiosT.interceptors.response.use(
  (response) => {
    if (response.status > 199 && response.status < 400) {
      if (window.location.pathname === "/login") {
        window.location.href = "/";
      }
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      originalRequest.url === "/accounts/token-refresh"
    ) {
      window.location.href = "/login";
      return Promise.reject(error);
    }
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosT.get(`/accounts/token-refresh`);
    }

    return Promise.reject(error);
  }
);

export default axiosT;
