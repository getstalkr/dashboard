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
  SIGNING_REGISTER_REQUEST,
  SIGNING_SET_AUTH,
  SIGNING_CHANGE_FORM
} from '../../actions/constants'

const watchRegister = function* () {
  while (true) {
    const request = yield take(SIGNING_REGISTER_REQUEST)
    const {username, password} = request.data

    const wasSuccessful = yield call(authorize, {username, password, isRegistering: true})

    if (wasSuccessful) {
      yield put({type: SIGNING_SET_AUTH, newAuthState: true})
      yield put({type: SIGNING_CHANGE_FORM, newFormState: {username: '', password: ''}})
      forwardTo('/token')
    }
  }
}

export { watchRegister };
