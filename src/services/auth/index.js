import { requestHandler as request } from './requestHandler';

import { USER } from './constants'
import {
  basic,
  bearer,
  statusHandler,
  getCurrentStorage as localStorage
} from '../../helpers'

/*~
* name: login
*
* description: Logs a user in, returning a promise with `true` when done
*
* stability: stable
*
* params:
* - username :: The username of the user
* - password :: The password of the user
*
* type: |
*    string, string => Promise<boolean>
*/

const login = function (username, password) {

  if (loggedIn()) return Promise.resolve(true)

  return request.post('/login', {username, password})
    .then(response => {
      // Save token to local storage
      localStorage().stalkr_session = response.token

      fetch(USER.secret, {
        method  : 'GET',
        mode: 'cors',
        headers: bearer(response.token)
      })
      .then(statusHandler)
      .catch(error => console.log(error))
      .then(res => res.json())
      .then(json => {
        localStorage().stalkr_secret = json.secret
      })

      return Promise.resolve(true)
    })
};

/**
* Logs the current user out
*/

const logout = function () {
  return request.post('/logout')
};

  /**
  * Checks if a user is logged in
  */

const loggedIn = function () {
  return !!localStorage().stalkr_session
};

/**
* Registers a user and then logs them in
* @param  {string} username The username of the user
* @param  {string} password The password of the user
*/

const register = function (username, password) {
  return request.post('/register', {username, password})
    .then(() => login(username, password))
}

export {
  login,
  logout,
  loggedIn,
  register
 };
