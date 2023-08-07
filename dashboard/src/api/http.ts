import { url } from '@/config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: url.api,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;