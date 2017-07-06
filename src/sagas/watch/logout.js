import {
  take,
  call,
  put
} from 'redux-saga/effects';

import { logout } from '../../services/auth';

import { forwardTo } from '../../helpers/forwardTo'

import {
  SIGNING_SENDING_REQUEST,
  SIGNING_LOGIN_REQUEST,
  SIGNING_REGISTER_REQUEST,
  SIGNING_SET_AUTH,
  SIGNING_LOGOUT,
  SIGNING_CHANGE_FORM,
  SIGNING_REQUEST_ERROR
} from '../../actions/constants';


const watchLogout = function* () {
  while (true) {
    yield take(SIGNING_LOGOUT)
    yield put({type: SIGNING_SET_AUTH, newAuthState: false})

    yield call(logout)
    forwardTo('http://getstal.kr')
  }
}

export { watchLogout }
