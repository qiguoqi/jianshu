import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeList = (result) => {
  console.log("changeHomeList fromJS result", fromJS(result));
  return {
    type: constants.CHANGE_HOME_LIST,
    data: fromJS(result),
  }
}

const addHomeList = (result, nextPage) => {
  return {
    type: constants.ADD_ARTICLE_LIST,
    data: fromJS(result),
    nextPage
  }
}

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json")
    .then(res => {
      const result = res.data.data;
      console.log("getHomeInfo axios result", result);
      dispatch(changeHomeList(result));
    })
  }
}

export const getMoreList = (page) => {
  return dispatch => {
    axios.get("/api/homeList.json?page="+page)
    .then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page+1));
    })
  }
}

export const toggleTopShow = (show) => {
  return {
    type: constants.TOGGLE_TOP_SHOW,
    show
  }
}