import { put, call, take, fork } from 'redux-saga/effects';
import { createExhibition, exhibitionList } from '@request/exhibition';
import { message} from 'antd';
import ActionTypes from '@actions/types';
import {
  fetchGenerateRequest,
  fetchGenerateSuccess,
  fetchGenerateFailure,
} from '@actions/generate';


function* handleCreateRequest(params) {
  try {
    const { name, address, time } = params;
    yield call(createExhibition, { name, address, time: time.format('YYYY/MM/DD') });
    yield put(
      fetchGenerateRequest({
        page: 1,
        size: 10
      })
    );
    message.success({
        content: '生成成功'
    });
  } catch (e) {
    yield put(fetchGenerateFailure(e));
  }
}

function* handleFetchRequest(params) {
  try {
    const res = yield call(exhibitionList, params.page, params.size);
    yield put(
      fetchGenerateSuccess({
        data: res
      })
    );
  } catch (e) {
    yield put(fetchGenerateFailure(e));
  }
}


export function* watchCreateExhibition() {
    while (true) {
      const resData = yield take(ActionTypes.POST_CREATE_REQUEST);
      yield fork(handleCreateRequest, resData.payload);
    }
}

export function* watchFetchExhibition() {
  while (true) {
    const resData = yield take(ActionTypes.FETCH_GENERATE_REQUEST);
    yield fork(handleFetchRequest, resData.payload);
  }
}
  
