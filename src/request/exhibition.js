import { ajax } from './index';

export const createExhibition = params => ajax({
    method: 'POST',
    url: `/api/v1.0/exhibition/create`,
    data: params,
    needToken: true,
});


