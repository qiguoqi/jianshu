import styled from 'styled-components';
import LogoPix from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${LogoPix});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 18px;
  padding: 0px 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrap = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 13px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .iconfont {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .5s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0px 5px;
  margin-left: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const SearchInfoList = styled.div`
  // overflow: hidden;
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  border: none;
  outline: none;
  margin: 9px 0px 9px 20px;
  padding: 0px 30px 0px 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: width 0.2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: width 0.2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.button`
  line-height: 38px;
  border-radius: 19px;
  float: right;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0px 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`

