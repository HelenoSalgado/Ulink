import { url } from '@/config';
import axios from 'axios';
//import { useAuth } from '@/stores/auth';


//console.log(useAuth);

const axiosInstance = axios.create({
    baseURL: url.api, 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmRhYTJkMzY5OWZhYTcxMjFiOWExMiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjkxMzMzNTgyLCJleHAiOjE2OTE1OTI3ODJ9.KNWgfUN_292hoSD4XHTCmCfhldPAxKqw_nK_i3T1azY'
    }
});

export default axiosInstance;