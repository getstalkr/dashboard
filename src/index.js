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
  predicate: (getState, action) =>
    action.type !== 'SIGNING_CHANGE_FORM' &&
    action.type !== 'ADD_CELL_CHANGE_FORM'
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

  if (nextState.location.pathname !== '/token') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
}

class Main extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path='/' component={Home} />
            <Route onEnter={checkAuth}>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/token' component={Dashboard} />
              <Route path='/new' component={NewDashboard} />
            </Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
