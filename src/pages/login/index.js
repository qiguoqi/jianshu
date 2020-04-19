import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={input=>this.account=input} />
            <Input placeholder="密码" type="password" innerRef={input=>this.password=input} />
            <Button onClick={()=>this.props.login(this.account, this.password)} >登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (accountElem, passwordElem) => {
      dispatch(actionCreators.login(accountElem.value, passwordElem.value));
      console.log(accountElem, passwordElem); 
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);