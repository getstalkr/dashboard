import {
  login,
  register,
  logout
} from './server'

const requestHandler = {

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
