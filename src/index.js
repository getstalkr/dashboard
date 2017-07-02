import 'babel-polyfill'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { root as rootSaga } from './sagas'
import { signingClearError } from './actions'

import './static/styles/main.css'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import NewDashboard from './components/NewDashboard'
import NotFound from './components/NotFound'

const logger = createLogger({
  predicate: (getState, action) => action.type !== 'SIGNING_CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

function checkAuth (nextState, replace) {

  const { loggedIn } = store.getState().home

  store.dispatch(signingClearError())

  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
}

// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
class LoginFlow extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path='/' component={Home} />
            <Route onEnter={checkAuth}>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/new' component={NewDashboard} />
            </Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<LoginFlow />, document.getElementById('app'))
