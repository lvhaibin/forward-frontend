import { createActions } from 'redux-actions';
import ActionTypes from './types';

console.log('ActionTypes', ActionTypes.FETCH_USER_REQUEST)

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = createActions(
  ActionTypes.FETCH_USER_REQUEST,
  ActionTypes.FETCH_USER_SUCCESS,
  ActionTypes.FETCH_USER_FAILURE
);
