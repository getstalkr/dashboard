// --[ Imports ]---------------------------------------------------------------

import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  CLIENT_TOKEN_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants'

// --[ Type Aliases ]----------------------------------------------------------

/*~
 * description: Payloads of information that send data from our application to our store.
 *
 * type: |
 *    type Action = { type: string; payload: Object };
 */

// --[ Action Creators ]-------------------------------------------------------

/*~
 * name: changeForm
 *
 * description: Sets the form state
 *
 * stability: stable
 *
 * params:
 * - newFormState          :: The new state of the form
 * - newFormState.username :: The new text of the username input field of the form
 * - newFormState.password :: The new text of the password input field of the form
 *
 * type: |
 *    object { username: string; password: string } => Action;
 */

const changeForm = function (newFormState) {
  return {type: CHANGE_FORM, newFormState}
}

/*~
 * name: setAuthState
 *
 * description: Sets the authentication state of the application
 *
 * stability: stable
 *
 * params:
 * - newAuthState :: True means a user is logged in, false means no user is logged in
 *
 * type: |
 *    boolean => Action;
 */

const setAuthState = function (newAuthState) {
  return {type: SET_AUTH, newAuthState}
}

/*~
 * name: sendingRequest
 *
 * description: Sets the `currentlySending` state, which displays a loading indicator during requests
 *
 * stability: stable
 *
 * params:
 * - sending :: True means we're sending a request, false means we're not
 *
 * type: |
 *    boolean => Action;
 */

const sendingRequest = function (sending) {
  return {type: SENDING_REQUEST, sending}
}

/*~
 * name: loginRequest
 *
 * description: Tells the app we want to log in a user
 *
 * stability: stable
 *
 * params:
 * - data          :: The data we're sending for log in
 * - data.username :: The username of the user to log in
 * - data.password :: The password of the user to log in
 *
 * type: |
 *    object { username: string; password: string } => Action;
 */

const loginRequest = function (data) {
  return {type: LOGIN_REQUEST, data}
}

/*~
 * name: logout
 *
 * description: Tells the app we want to log out a user
 *
 * stability: stable
 *
 * params:
 *
 * type: |
 *    object { type: string };
 */

const logout = function () {
  return {type: LOGOUT}
}

/*~
 * name: registerRequest
 *
 * description: Tells the app we want to register a user
 *
 * stability: stable
 *
 * params:
 * - data          :: The data we're sending for registration
 * - data.username :: The username of the user to register
 * - data.password :: The password of the user to register
 *
 * type: |
 *    object { username: string; password: string } => Action;
 */

const registerRequest = function(data) {
  return {type: REGISTER_REQUEST, data}
}

/*~
 * name: clientTokenRequest
 *
 * description: Tells the app we want to register a user
 *
 * stability: stable
 *
 * params:
 * - data       :: The data we're sending for request
 * - data.token :: The token to auth
 *
 * type: |
 *    object { token:string } => Action;
 */

const clientTokenRequest = function(data) {
  return {type: CLIENT_TOKEN_REQUEST, data}
}

/*~
 * name: requestError
 *
 * description: Sets the `error` state to the error received
 *
 * stability: stable
 *
 * params:
 * - error :: The error we got when trying to make the request
 *
 * type: |
 *    Error => Action;
 */

const requestError = function (error) {
  return {type: REQUEST_ERROR, error}
}

/*~
 * name: clearError
 *
 * description: Sets the `error` state as empty
 *
 * stability: stable
 *
 * params:
 *
 * type: |
 *    Action;
 */

const clearError = function () {
  return {type: CLEAR_ERROR}
}

export {
  changeForm,
  setAuthState,
  loginRequest,
  logout,
  registerRequest,
  clientTokenRequest,
  requestError,
  clearError
};
