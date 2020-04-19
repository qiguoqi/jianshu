import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  RecomentWrapper,
  RecomentItem
} from '../style';

class Recoment extends PureComponent {
  render() {
    return (
      <RecomentWrapper>
        {
          this.props.recomentList.map(item => {
            return (
              <RecomentItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecomentItem>
            )
          })
        }
      </RecomentWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recomentList: state.getIn(['home', 'recomentList'])
  }
}

export default connect(mapStateToProps, null)(Recoment);