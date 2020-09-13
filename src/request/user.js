import axios from 'axios';
import { ajax } from './index';


export const userInfo = name => ajax({
  method: 'GET',
  url: `/api/v1.0/user`,
  needToken: false,
});

export const login = params => axios({
    method: 'POST',
    url: `/api/v1.0/login`,
    data: params,
    needToken: false
})


