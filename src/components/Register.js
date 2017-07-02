import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SigningForm from './common/Form/Signing';

import select from '../helpers/select'

import {signingRegisterRequest} from '../actions';

class Register extends Component {

  constructor (props) {
    super(props)

    this._register = this._register.bind(this)
  }

  render () {
    let {dispatch} = this.props
    let {formState, currentlySending, error} = this.props.data.home

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Register</h2>
          </div>
          <SigningForm data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register} btnText={'Register'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _register (username, password) {
    this.props.dispatch(signingRegisterRequest({username, password}))
  }
}

Register.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(select)(Register)
