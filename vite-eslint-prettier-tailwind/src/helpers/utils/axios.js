import axios from "axios";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
