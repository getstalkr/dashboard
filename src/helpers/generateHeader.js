// --[ Helpers ]---------------------------------------------------------------

import base64 from 'base-64';

const auth = {

  basic (username, password) {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${base64.encode(username + ":" + password)}`
    });
  },

  bearer (token) {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  },

  bearerDashboard (token) {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'name': 'Stalkr'
    });
  }

};

const basic = auth.basic;
const bearer = auth.bearer;
const bearerDashboard = auth.bearerDashboard;

export { basic, bearer, bearerDashboard };
