import {
  get,
  put
} from './server'

const requestHandler = {

  post (endpoint, data) {
    switch (endpoint) {
      case '/get':
        return get()
      case '/put':
        return put(data)
      default:
        break
    }
  }
}

export { requestHandler }
