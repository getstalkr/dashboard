import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import {changeForm} from '../../actions'

class VerificationCode extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: null
    };

  }

  componentWillMount() {
    this.state.key = localStorage.stalkr_secret
  }

  render () {

    return (

      <div className="container">
        <div className="verification running">
          <span className="code"> { this.state.key } </span>
          <div className="expire-bar">
            <div className="color-bar" />
          </div>
        </div>
      </div>

    )
  }
}

// VerificationCode.propTypes = {
//   dispatch: PropTypes.func,
//   data: PropTypes.object,
//   onSubmit: PropTypes.func,
//   changeForm: PropTypes.func,
//   btnText: PropTypes.string,
//   error: PropTypes.string,
//   currentlySending: PropTypes.bool
// }

export default VerificationCode
