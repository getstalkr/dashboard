import {
  take,
  call,
  put
} from 'redux-saga/effects';

import {
  put as putData
} from '../../services/dashboard';

import { forwardTo } from '../../helpers/forwardTo'

import {
  ADD_CELL_REQUEST,
  ADD_CELL_CHANGE_FORM
} from '../../actions/constants'

const watchNewDashboard = function* () {
  while (true) {

    let request = yield take(ADD_CELL_REQUEST)
    let {team, project, travisApiKey, githubApiKey, apexApiKey} = request.data

    yield call(putData, {team, project, travisApiKey, githubApiKey, apexApiKey})

    yield put({type: ADD_CELL_CHANGE_FORM, newFormState: {team: '', project: '', travisApiKey: '', githubApiKey: '', apexApiKey: ''}})
    forwardTo('/new')

  }
}

export { watchNewDashboard };
