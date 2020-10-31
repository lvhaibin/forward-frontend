import { ajax } from './index';

export const createSupplier = params => ajax({
    method: 'POST',
    url: `/api/v1.0/supplier/create`,
    data: params,
    needToken: true,
});


export const supplierList = (page, pageSize) => ajax({
    method: 'get',
    url: `/api/v1.0/supplier/list?page=${page}&pageSize=${pageSize}`,
    needToken: true,
});
