import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
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

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {...state, formState: action.newFormState}
    case SET_AUTH:
      return {...state, loggedIn: action.newAuthState}
    case SENDING_REQUEST:
      return {...state, currentlySending: action.sending}
    case REQUEST_ERROR:
      return {...state, error: action.error}
    case CLEAR_ERROR:
      return {...state, error: ''}
    default:
      return state
  }
}

export { reducer }
