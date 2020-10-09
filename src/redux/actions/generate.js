import { createActions } from 'redux-actions';
import ActionTypes from './types';

export const { fetchGenerateRequest, fetchGenerateSuccess, fetchGenerateFailure, postCreateRequest } = createActions(
  ActionTypes.FETCH_GENERATE_REQUEST,
  ActionTypes.FETCH_GENERATE_SUCCESS,
  ActionTypes.FETCH_GENERATE_FAILURE,
  ActionTypes.POST_CREATE_REQUEST
);
