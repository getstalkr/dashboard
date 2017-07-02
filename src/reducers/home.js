import {
  SIGNING_CHANGE_FORM,
  SIGNING_SET_AUTH,
  SIGNING_SENDING_REQUEST,
  SIGNING_REQUEST_ERROR,
  SIGNING_CLEAR_ERROR
} from '../actions/constants'

import { loggedIn } from '../services/auth'

const initialState = {
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: loggedIn()
}

const home = function (state = initialState, action) {
  switch (action.type) {
    case SIGNING_CHANGE_FORM:
      return {...state, formState: action.newFormState}
    case SIGNING_SET_AUTH:
      return {...state, loggedIn: action.newAuthState}
    case SIGNING_SENDING_REQUEST:
      return {...state, currentlySending: action.sending}
    case SIGNING_REQUEST_ERROR:
      return {...state, error: action.error}
    case SIGNING_CLEAR_ERROR:
      return {...state, error: ''}
    default:
      return state
  }
}

export default home
