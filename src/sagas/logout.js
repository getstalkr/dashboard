import {
  call,
  put
} from 'redux-saga/effects';

import { logout } from '../services/auth';

import {
  SIGNING_SENDING_REQUEST,
  SIGNING_REQUEST_ERROR
} from '../actions/constants'

export function * logout () {
  yield put({type: SIGNING_SENDING_REQUEST, sending: true})
  try {
    let response = yield call(logout)
    yield put({type: SIGNING_SENDING_REQUEST, sending: false})
    return response
  } catch (error) {
    yield put({type: SIGNING_REQUEST_ERROR, error: error.message})
  }
}
