import { createActions } from 'redux-actions';
import ActionTypes from './types';

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = createActions(
  ActionTypes.FETCH_ACL_REQUEST,
  ActionTypes.FETCH_ACL_SUCCESS,
  ActionTypes.FETCH_ACL_FAILURE
);
