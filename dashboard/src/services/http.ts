import axios from 'axios';
import { baseUrl } from '@/shared/apiBaseUrl';
//import { useAuth } from '@/stores/auth';


//console.log(useAuth);

const axiosInstance = axios.create({
    baseURL: baseUrl, 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmRhYTJkMzY5OWZhYTcxMjFiOWExMiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjkwNjQzNTg3LCJleHAiOjE2OTA5MDI3ODd9.vBaq9caMTdqYBb2F0wGgn59zg9Q_BUGXz5SONLxvqnM'
    }
});

export default axiosInstance;