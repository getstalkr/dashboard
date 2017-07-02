import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Nav from './common/Nav';
import select from '../helpers/select'

class App extends Component {
  render () {

    return (
      <div className='wrapper'>
        <Nav loggedIn={this.props.data.home.loggedIn}
          currentlySending={this.props.data.home.currentlySending}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(select)(App)
