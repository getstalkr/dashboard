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

    const request = yield take(SIGNING_LOGIN_REQUEST)
    const {username, password} = request.data

    const winner = yield race({
      auth: call(authorize, {username, password, isRegistering: false}),
      logout: take(SIGNING_LOGOUT)
    })

    if (winner.auth) {

      yield put({type: SIGNING_SET_AUTH, newAuthState: true})
      yield put({type: SIGNING_CHANGE_FORM, newFormState: {username: '', password: ''}})
      forwardTo('/token')

    } else if (winner.logout) {

      yield put({type: SIGNING_SET_AUTH, newAuthState: false})
      yield call(logout)
      forwardTo('http://getstal.kr')
    }
  }
}

export { watchLogin };
