import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import SVGInline from 'react-svg-inline';
import select from '../helpers/select'

import logo from './../static/images/logo.svg';

class Home extends Component {
  render () {

    return (

      <article>
        <div>
          <section className='text-section'>

            <SVGInline svg={ logo } className='logo' />

            <h2>Stalkr Auth</h2>

            <p>Whenever you want to log in to the Stalkr Apple TV app, this app provides you with a short code that you can enter in your Apple TV. Once the code has been entered, our app is able to retrieve an authentication token from our API.</p>

          </section>

          <section className='text-section'>

            <h2>It's Simple!</h2>

            <h4>Register</h4>

            <p>If you don't have an account on the Stalkr ☁️ yet, then just:</p>

            <div className='btn--home-wrapper'>
              <Link to='/register' className='btn btn--login btn--home'>Register</Link>
            </div>

            <h4>Login</h4>

            <p>If you're already part of Stalkr, then just: </p>

            <div className='btn--home-wrapper'>
              <Link to='/login' className='btn btn--login btn--home'>Login</Link>
            </div>

            <h4>Get your code</h4>

            <p>Description...</p>

          </section>

        </div>
      </article>

    )
  }
}

export default connect(select)(Home)
