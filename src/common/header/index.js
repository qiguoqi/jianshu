import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { actionCreators } from './store/index';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrap,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button
} from './style';
import { Link } from 'react-router-dom';

class Header extends Component {

  getListArea(value, list, totalPage, page) {
    let { handleMouseEnter, handleMouseLeave, mouseEnter, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(newList[i]);
    }
    if (value || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.iconSpin)}>
              <span className="iconfont" ref={(icon) => this.iconSpin = icon}>&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
              {
                pageList.map( (value, index) => {
                  return (
                    <SearchInfoItem key={index}>
                      {value}
                    </SearchInfoItem>
                  )
                } )
              }
            </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    let {focused, list, handleBlur, handleFocus, totalPage, page, login, loginOut} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ? 
            <NavItem className="right" onClick={loginOut}>退出</NavItem> : 
            <Link to='/login'><NavItem className="right">登录</NavItem></Link> }
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrap>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused":""}
                onFocus={() => handleFocus(list)}
                onBlur = {handleBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? "iconfont focused zoom":"iconfont zoom"}>&#xe617;</span>
            {this.getListArea(focused, list, totalPage, page)}
          </SearchWrap>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writing">
              <span className="iconfont">&#xe609;</span>
              写文章
            </Button>
            </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFocus: (list) => {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },

    handleBlur: () => {
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave());
    },

    handleChangePage: (page, totalPage, spin) => {
      console.log(spin);
      let originAngel = spin.style.transform.replace(/[^0-9]/ig, "");
      if (originAngel) {
        originAngel = parseInt(originAngel, 10);
      } else {
        originAngel = 0;
      }
      spin.style.transform = 'rotate(' + (originAngel + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePageList(page+1));
      } else {
        dispatch(actionCreators.changePageList(1));
      }
    },
    
    loginOut: () => {
      dispatch(loginActionCreators.loginOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);