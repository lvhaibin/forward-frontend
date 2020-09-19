import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import ActionTypes from '@actions/types';

const initialState = fromJS({
  data: ''
});

export default handleActions(
  {
    [ActionTypes.FETCH_USER_SUCCESS]: (state, action) => {
      const { data } = action.payload;
      return state.set('data', fromJS(data));
    }
  },
  initialState
);
