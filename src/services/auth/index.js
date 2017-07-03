import { requestHandler as request } from './requestHandler';

import { USER } from './constants'
import {
  basic,
  bearer,
  statusHandler,
  getCurrentStorage as localStorage
} from '../../helpers'

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

const logout = function () {
  return request.post('/logout')
};

const loggedIn = function () {
  return !!localStorage().stalkr_session
};

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
