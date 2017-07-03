import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VerificationCode extends Component {
  render () {
    return (
      <div className="container">
        <div className="verification running">
          <span className="code"> { this.props.secret } </span>
          <div className="expire-bar">
            <div className="color-bar" />
          </div>
        </div>
      </div>
    )
  }
}

VerificationCode.propTypes = {
  secret: PropTypes.string
}

export default VerificationCode
