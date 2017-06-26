import { fork } from 'redux-saga/effects';

import {
  loginFlow,
  logoutFlow,
  registerFlow
} from './flow';

const root = function* () {
  yield fork(loginFlow)
  yield fork(logoutFlow)
  yield fork(registerFlow)
};

export { root };
