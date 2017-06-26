import {
  take,
  call,
  put
} from 'redux-saga/effects';

import {
  login,
  logout,
  register
} from '../../services/auth';

import { forwardTo } from '../../helpers/forwardTo'

import { authorize } from '../authorize';

import {
  REGISTER_REQUEST,
  SET_AUTH,
  CHANGE_FORM
} from '../../actions/constants'

/**
 * Register saga
 * Very similar to log in saga!
 */
const registerFlow = function* () {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    let request = yield take(REGISTER_REQUEST)
    let {username, password} = request.data

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    let wasSuccessful = yield call(authorize, {username, password, isRegistering: true})

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({type: SET_AUTH, newAuthState: true}) // User is logged in (authorized) after being registered
      yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}}) // Clear form
      forwardTo('/dashboard') // Go to dashboard page
    }
  }
}

export { registerFlow };
