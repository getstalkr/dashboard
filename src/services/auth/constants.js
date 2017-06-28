// --[ API Endpoints ]---------------------------------------------------

import { BASE_API } from '../constants'

const USER = {
  // Sign a user up
  'register': `${BASE_API}user/register/`,
  // Sign a user in
  'login': `${BASE_API}user/login/`,
  // Get the authenticated user data
  'current': `${BASE_API}user/me/`,
  // Get the authenticated user data
  'secret': `${BASE_API}user/shorttoken/`,
}

export {
  USER
}
