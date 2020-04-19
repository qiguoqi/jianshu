import axios from 'axios';
import { constants } from './index';

const changeLogin = () => {
  return {
    type: constants.CHANGE_LOGIN,
    value: true
  }
}

export const loginOut = () => {
  return {
    type: constants.LOGINOUT,
    value: false
  }
}

export const login = (account, password) => {
  return dispatch => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
    .then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      } else {
        alert("登录失败");
      }
      console.log(res);
    })
  }
}