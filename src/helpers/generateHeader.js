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
  }

};

const basic = auth.basic;
const bearer = auth.bearer;

export { basic, bearer };
