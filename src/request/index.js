import axios from 'axios';
import cookies from '../utils/cookies';

export const ajax = axios.create({
    timeout: 60000,
    needToken: true,
    headers: {}
  });
  
  ajax.interceptors.request.use(
    config => {
      const token = cookies.get('access_token');
      if (!token) {
        location.href = '/login';
        return;
      }
      if (config.needToken) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    err => {
      Promise.reject(err);
    }
  );
  
  // response interceptors
  ajax.interceptors.response.use(
    async res => {
      const { code, body } = res.data;
      // request success
      if (code === 0) {
        return Promise.resolve(body);
      }

      return Promise.reject(res.data);
    },
    err => {
      if (err.response.status === 401) {
        location.href = '/login';
      }
      return Promise.reject(err)
    }
  );
  