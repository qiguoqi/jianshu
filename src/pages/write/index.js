import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
  render() {
    if (this.props.loginStatus) {
      return (
        <div>写文章</div>
      );
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps, null)(Write);