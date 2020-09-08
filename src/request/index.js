import axios from 'axios';

export const ajax = axios.create({
    timeout: 60000,
    needToken: true,
    headers: {}
  });
  
  ajax.interceptors.request.use(
    config => {
      if (config.needToken) {
        config.headers['X-Token'] = 'this is token';
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
    err => Promise.reject(err)
  );
  