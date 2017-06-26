import {
  call,
  put
} from 'redux-saga/effects';

import {
  login,
  register
} from '../services/auth';

import {
  SENDING_REQUEST,
  REQUEST_ERROR
} from '../actions/constants'

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
const authorize = function * ({username, password, isRegistering}) {

  yield put({type: SENDING_REQUEST, sending: true})

  // We then try to register or log in the user, depending on the request
  try {
    let response

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(register, username, password)
    } else {
      response = yield call(login, username, password)
    }
    return response
  } catch (error) {
    console.log(error)
    // If we get an error we send Redux the appropiate action and return
    yield put({type: REQUEST_ERROR, error: error.message})

    return false
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({type: SENDING_REQUEST, sending: false})
  }
}

export { authorize };
