const getCurrentStorage = function () {
  return (global.process && process.env.NODE_ENV === 'test')
    ? require('localStorage')
    : global.window.localStorage
}

export { getCurrentStorage }
