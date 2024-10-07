import axios from 'axios';

const baseUrl = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.data.message) {
        return Promise.reject(error.response.data.message);
      }
      return Promise.reject(error.response.data.errors[0].message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
