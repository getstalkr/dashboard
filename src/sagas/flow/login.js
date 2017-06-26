import {
  take,
  call,
  put,
  race
} from 'redux-saga/effects';

import {
  login,
  logout,
  register
} from '../../services/auth';

import { authorize } from '../authorize';

import { forwardTo } from '../../helpers/forwardTo';

import {
  LOGIN_REQUEST,
  SET_AUTH,
  LOGOUT,
  CHANGE_FORM
} from '../../actions/constants';

/**
 * Log in saga
 */
const loginFlow = function* () {

  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    let request = yield take(LOGIN_REQUEST)
    let {username, password} = request.data

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    let winner = yield race({
      auth: call(authorize, {username, password, isRegistering: false}),
      logout: take(LOGOUT)
    })

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put({type: SET_AUTH, newAuthState: true}) // User is logged in (authorized)
      yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}}) // Clear form
      forwardTo('/dashboard') // Go to dashboard page
      // If `logout` won...
    } else if (winner.logout) {
      // ...we send Redux appropiate action
      yield put({type: SET_AUTH, newAuthState: false}) // User is not logged in (not authorized)
      yield call(logout) // Call `logout` effect
      forwardTo('/') // Go to root page
    }
  }
}

export { loginFlow };
