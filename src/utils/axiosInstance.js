import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.SERVER_URL}:${process.env.SERVER_PORT}`,
    timeout: 5000
});

export default axiosInstance;
