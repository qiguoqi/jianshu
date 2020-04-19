import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  topicList:[],
  articleList:[],
  recomentList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeList = (state, action) => {
  return state.merge({
    topicList: action.data.get('topicList'),
    articleList: action.data.get('articleList'),
    recomentList: action.data.get('recommendList')
  });
}

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.data),
    'articlePage': action.nextPage
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST:
      return changeHomeList(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
      case constants.TOGGLE_TOP_SHOW:
        return state.set('showScroll', action.show);
    default:
      return state;
  }
}

export default reducer;