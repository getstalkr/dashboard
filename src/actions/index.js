import {

  SIGNING_CHANGE_FORM,
  SIGNING_SET_AUTH,
  SIGNING_SENDING_REQUEST,
  SIGNING_LOGIN_REQUEST,
  SIGNING_REGISTER_REQUEST,
  CLIENT_TOKEN_REQUEST,
  SIGNING_LOGOUT,
  SIGNING_REQUEST_ERROR,
  SIGNING_CLEAR_ERROR,

  ADD_CELL_CHANGE_FORM,
  ADD_CELL_SENDING_REQUEST,
  ADD_CELL_REQUEST,
  ADD_CELL_REQUEST_ERROR,
  ADD_CELL_CLEAR_ERROR

} from './constants'

const signingChangeForm = function (newFormState) {
  return {type: SIGNING_CHANGE_FORM, newFormState}
}

const signingSetAuthState = function (newAuthState) {
  return {type: SIGNING_SET_AUTH, newAuthState}
}

const signingSendingRequest = function (sending) {
  return {type: SIGNING_SENDING_REQUEST, sending}
}

const signingLoginRequest = function (data) {
  return {type: SIGNING_LOGIN_REQUEST, data}
}

const signingLogout = function () {
  return {type: SIGNING_LOGOUT}
}

const signingRegisterRequest = function(data) {
  return {type: SIGNING_REGISTER_REQUEST, data}
}

const signingRequestError = function (error) {
  return {type: SIGNING_REQUEST_ERROR, error}
}

const signingClearError = function () {
  return {type: SIGNING_CLEAR_ERROR}
}

const addCellChangeForm = function (newFormState) {
  return {type: ADD_CELL_CHANGE_FORM, newFormState}
}

const addCellSendingRequest = function (sending) {
  return {type: ADD_CELL_SENDING_REQUEST, sending}
}

const addCellRequest = function (data) {
  return {type: ADD_CELL_REQUEST, data}
}

const addCellRequestError = function (error) {
  return {type: ADD_CELL_REQUEST_ERROR, error}
}

const addCellClearError = function () {
  return {type: ADD_CELL_CLEAR_ERROR}
}


export {
  signingChangeForm,
  signingSetAuthState,
  signingLoginRequest,
  signingLogout,
  signingRegisterRequest,
  signingRequestError,
  signingClearError,

  addCellChangeForm,
  addCellClearError,
  addCellRequest,
  addCellRequestError,
  addCellSendingRequest
};

