import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3500/api',
});

axiosInstance.interceptors.request.use((config) : AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
}, (err) => {
    return Promise.reject(err);
});


export default axiosInstance;