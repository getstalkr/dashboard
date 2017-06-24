const getCurrentStorage = function () {
  return (global.process && process.env.NODE_ENV === 'test')
    ? localStorage = require('localStorage')
    : localStorage = global.window.localStorage
}

export { getCurrentStorage }
