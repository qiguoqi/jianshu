import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import List from './components/List';
import Recoment from './components/Recoment';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { 
  HomeWrapper, 
  HomeLeft,
  HomeRight,
  BackTop,
} from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
            <Recoment />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
        
      </HomeWrapper>
    );
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.changeHomeList();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeHomeList: () => {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow: (e) => {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);