import { fork, all } from 'redux-saga/effects';
import { watchFetchUser } from './user';
import { watchCreateExhibition, watchFetchExhibition } from './generate'


export default function* rootSaga() {
    try {
      yield all([
        fork(watchFetchUser),
        fork(watchCreateExhibition),
        fork(watchFetchExhibition),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
  