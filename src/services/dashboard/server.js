import { DASHBOARD } from './constants'

import {
  bearerDashboard,
  statusHandler,
  getCurrentStorage as localStorage
} from '../../helpers'

import {
  Dashboard,
  Grid,
  Cell
} from './../../models'

const get = function () {

  return new Promise((resolve, reject) => {
    fetch(DASHBOARD.all, {
      method: 'GET',
      mode: 'cors',
      headers: bearerDashboard(localStorage().stalkr_session)
    })
    .then(statusHandler)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then(json => {
      (!json.error)
        ? resolve(new Dashboard(json))
        : reject(new Error(json.reason))
    })
  })
};

const put = function (dashboard) {

  return new Promise((resolve, reject) => {

    fetch(DASHBOARD.new, {
      method: 'POST',
      mode: 'cors',
      headers: bearerDashboard(localStorage().stalkr_session),
      body: JSON.stringify(dashboard)
    })
    .then(statusHandler)
    .catch(error => console.log(error))
    .then(res => res.json())
    .then(json => {
      (!json.error)
        ? resolve({added: true})
        : reject(new Error(json.reason))
    })
  })
};

export { get, put };
