import {
  take,
  call,
  put
} from 'redux-saga/effects';

import {
  logout
} from '../../services/auth';

import { forwardTo } from '../../helpers/forwardTo'

import {
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SET_AUTH,
  LOGOUT,
  CHANGE_FORM,
  REQUEST_ERROR
} from '../../actions/constants';

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
const logoutFlow = function* () {
  while (true) {
    yield take(LOGOUT)
    yield put({type: SET_AUTH, newAuthState: false})

    yield call(logout)
    forwardTo('/')
  }
}

export { logoutFlow }
