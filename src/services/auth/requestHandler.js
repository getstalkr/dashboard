import {
  login,
  register,
  logout
} from './server'

const requestHandler = {

  /*~
  * name: post
  *
  * description: Posts to our remote server
  *
  * stability: stable
  *
  * params:
  * - endpoint :: The endpoint of the server that should be contacted
  * - data     :: The data that should be sent to the server
  *
  * type: |
  *    string, ?object => Promise<Object, Error>
  */

  post (endpoint, data) {
    switch (endpoint) {
      case '/login':
        return login(data.username, data.password)
      case '/register':
        return register(data.username, data.password)
      case '/logout':
        return logout()
      default:
        break
    }
  }
}

export { requestHandler }
