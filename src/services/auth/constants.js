import { BASE_API } from '../constants'

const USER = {
  'register': `${BASE_API}user/register/`,
  'login': `${BASE_API}user/login/`,
  'current': `${BASE_API}user/me/`,
  'secret': `${BASE_API}user/shorttoken/`,
}

export {
  USER
}
