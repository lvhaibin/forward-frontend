import { fork, all } from 'redux-saga/effects';
export default function* rootSaga() {
    try {
      yield all([
        // fork(xxx),
      ]);
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  }
  