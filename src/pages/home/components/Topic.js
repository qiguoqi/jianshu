import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends PureComponent {
  render() {
    console.log("topic props:",this.props);
    return (
      <TopicWrapper>
        {
          this.props.topicList.map( item => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic'
                  src={item.get('imgUrl')} alt="哈哈哈"
                />
                {item.get('title')}
              </TopicItem>
            )
          } )
        }
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic);