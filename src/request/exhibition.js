import { ajax } from './index';

export const createExhibition = params => ajax({
    method: 'POST',
    url: `/api/v1.0/exhibition/create`,
    data: params,
    needToken: true,
});


export const exhibitionList = (page, pageSize) => ajax({
    method: 'get',
    url: `/api/v1.0/exhibition/list?page=${page}&pageSize=${pageSize}`,
    needToken: true,
});
