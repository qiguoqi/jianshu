import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  focused: false,
  mouseEnter: false,
  list: [],
  page: 1,
  totalPage: 1,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseEnter', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseEnter', false);
    case actionTypes.CHANGE_PAGE_LIST:
      return state.set('page', action.page);
    default:
      return state;
  }
}

export default reducer;