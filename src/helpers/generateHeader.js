// --[ Helpers ]---------------------------------------------------------------

import base64 from 'base-64';

const auth = {

  /*~
  * name: basic
  *
  * description: Create custom headers object via the Headers() constructor
  *
  * stability: stable
  *
  * params:
  * - username :: The username to auth
  * - password :: The password to auth
  *
  * type: |
  *    username: string, password: string => Header;
  */

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
