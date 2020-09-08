import { put, call, take, fork } from 'redux-saga/effects';
import { userInfo } from '../../request/user';
import ActionTypes from '../actions/types';
import {
//   fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../actions/user';


function* handleFetchUserRequest(params) {
    try {
      const res = yield call(userInfo, params);
  
      if (res.status === 200) {
        yield put(
            fetchUserSuccess({
            data: res.data
          })
        );
      } else {
        yield put(fetchUserFailure(res));
      }
    } catch (e) {
      yield put(fetchUserFailure(e));
    }
  }
  
  

export function* watchFetchUser() {
    while (true) {
      const resData = yield take(ActionTypes.FETCH_USER_REQUEST);
      yield fork(handleFetchUserRequest, resData.payload);
    }
  }
  
