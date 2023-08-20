import { url } from '@/config';
import { useAuth } from '@/stores/auth';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: url.api,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use((request) => {
    
    const token = useAuth().token;
    
    if(token) {
        request.headers.Authorization = token;
    }
    return request; 
});

export default axiosInstance;