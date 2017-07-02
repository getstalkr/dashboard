import {
  call,
  put
} from 'redux-saga/effects';

import {
  login,
  register
} from '../services/auth';

import {
  SIGNING_SENDING_REQUEST,
  SIGNING_REQUEST_ERROR
} from '../actions/constants'

const authorize = function * ({username, password, isRegistering}) {

  yield put({type: SIGNING_SENDING_REQUEST, sending: true})

  try {
    let response

    if (isRegistering) {
      response = yield call(register, username, password)
    } else {
      response = yield call(login, username, password)
    }
    return response
  } catch (error) {
    console.log(error)
    yield put({type: SIGNING_REQUEST_ERROR, error: error.message})

    return false
  } finally {
    yield put({type: SIGNING_SENDING_REQUEST, sending: false})
  }
}

export { authorize };
