import { fork } from 'redux-saga/effects';

import {
  watchLogin,
  watchLogout,
  watchRegister,
  watchNewDashboard
} from './watch';

const root = function* () {
  yield fork(watchLogin)
  yield fork(watchLogout)
  yield fork(watchRegister)
  yield fork(watchNewDashboard)
};

export { root };
