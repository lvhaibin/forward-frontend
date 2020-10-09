import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import ActionTypes from '@actions/types';

const initialState = fromJS({
  loading: true,
  data: ''
});

export default handleActions(
  {
    [ActionTypes.FETCH_GENERATE_SUCCESS]: (state, action) => {
      const { data } = action.payload;
      return state.set('loading', false).set('data', fromJS(data));
    },
    [ActionTypes.FETCH_GENERATE_FAILURE]: (state, action) => {
      return state.set('loading', false).set('data', '');
    }
  },
  initialState
);
