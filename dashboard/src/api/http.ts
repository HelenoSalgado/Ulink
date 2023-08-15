import { url } from '@/config';
//import { useAuth } from '@/stores/auth';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: url.api,
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': useAuth().token
    }
});

export default axiosInstance;