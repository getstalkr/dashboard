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
  SIGNING_LOGIN_REQUEST,
  SIGNING_SET_AUTH,
  SIGNING_LOGOUT,
  SIGNING_CHANGE_FORM
} from '../../actions/constants';

const watchLogin = function* () {

  while (true) {

    let request = yield take(SIGNING_LOGIN_REQUEST)
    let {username, password} = request.data

    let winner = yield race({
      auth: call(authorize, {username, password, isRegistering: false}),
      logout: take(SIGNING_LOGOUT)
    })

    if (winner.auth) {

      yield put({type: SIGNING_SET_AUTH, newAuthState: true})
      yield put({type: SIGNING_CHANGE_FORM, newFormState: {username: '', password: ''}})
      forwardTo('/dashboard')

    } else if (winner.logout) {

      yield put({type: SIGNING_SET_AUTH, newAuthState: false})
      yield call(logout)
      forwardTo('/')
    }
  }
}

export { watchLogin };
