import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';
import {
  ListItem,
  ItemInfo,
  LoadMore,
} from '../style';

class List extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.articleList.map((item,index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="120"/>
                  <ItemInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ItemInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {this.props.getMoreList(this.props.page)}}>阅读更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMoreList: (page) => {
      dispatch(actionCreators.getMoreList(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);