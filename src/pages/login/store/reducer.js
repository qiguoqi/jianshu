import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  login: false
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.LOGINOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}

export default reducer;