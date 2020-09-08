import { ajax } from './request';


export const userInfo = name => ajax({
  method: 'GET',
  url: `api/v1.0/user/info?name=${name}`,
  needToken: false,
});


