import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoadingButton from './LoadingButton';
import {Link} from 'react-router';

import {signingLogout, signingClearError} from '../../actions'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link to='/token' className='btn btn--dash btn--nav'>My  TV Secret</Link>
        <Link to='/dashboard/new' className='btn btn--dash btn--nav'>Add a Dashboard</Link>
        {this.props.currentlySending
          ? (<LoadingButton className='btn--nav'/>)
          : (<a href='http://getstal.kr' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a>)
        }
      </div>
    ) : (
      <div>
        <a href='http://getstal.kr' className='btn btn--login btn--nav'>Go Home</a>
        <Link to='/register' className='btn btn--login btn--nav' onClick={this._clearError}>Register</Link>
        <Link to='/login' className='btn btn--login btn--nav' onClick={this._clearError}>Login</Link>
      </div>
    )

    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>
            <h1 className='nav__logo'>Stalkr Dashboard</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(signingLogout())
  }

  _clearError () {
    this.props.dispatch(signingClearError())
  }
}

Nav.propTypes = {
  loggedIn: PropTypes.bool,
  currentlySending: PropTypes.bool,
  dispatch: PropTypes.func
}

export default Nav
