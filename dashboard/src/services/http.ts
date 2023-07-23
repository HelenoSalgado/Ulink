import axios from 'axios';
import { baseUrl } from '@/shared/apiBaseUrl';

const axiosInstance = axios.create({
    baseURL: baseUrl, 
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;