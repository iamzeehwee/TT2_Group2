import axios from 'axios';
import { SERVER_URL } from './env.js';

const instance = axios.create({
    baseURL: (process.env.NODE_ENV === 'production' ? SERVER_URL : 'http://localhost:5000'),
    withCredentials: true
});

instance.interceptors.response.use(response => {
    return response;
 }, error => {
    // unauthorized user, reload page will bring to landing page
   if (error.response.status === 401) { 
    window.location.reload();
   }
   return error;
 });

export default instance;
