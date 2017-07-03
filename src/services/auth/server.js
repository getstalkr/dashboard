import { USER } from './constants'

import {
  basic,
  bearer,
  statusHandler,
  getCurrentStorage as localStorage
} from '../../helpers'

const login = function (username, password) {

  return new Promise((resolve, reject) => {
    fetch(USER.login, {
      method  : 'POST',
      mode: 'cors',
      headers: basic(username, password)
    })
    .then(statusHandler)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then(json => {
      (!json.error)
        ? resolve({
            authenticated: true,
            token: json.token
          })
        : reject(new Error(json.reason))
    })
  })
};

const register = function (username, password) {

  return new Promise((resolve, reject) => {

    fetch(USER.register, {
      method  : 'POST',
      mode: 'cors',
      headers: basic(username, password)
    })
    .then(statusHandler)
    .catch(error => error)
    .then(res => res.json())
    .then(json => {
      (!json.error)
        ? resolve({registered: true})
        : reject(new Error(json.reason))
    })
  })

};

const logout = function () {
    return new Promise(resolve => {
      localStorage().removeItem('stalkr_session')
      localStorage().removeItem('stalkr_secret')
      resolve(true)
    })
};

export { login, register, logout };
