import { requestHandler as request } from './requestHandler';

import { DASHBOARD } from './constants'
import { statusHandler } from '../../helpers'

const get = function () {

  return request.post('/get')
    .then(response => {
      return Promise.resolve(response)
    })

};

const put = function ({team, project, travisApiKey}) {

  const dashboard =

  {
    "name": project,
    "grid": [
        [
            {
                "cell": "CellCloudPerformance",
                "params": {
                    "pusher_key": travisApiKey,
                    "stalkr_project": project,
                    "stalkr_team": team
                }
            },
            {
                "cell": "CellTravis",
                "params": {
                    "pusher_key": travisApiKey,
                    "stalkr_project": project,
                    "stalkr_team": team
                }
            }
        ],
        [
            {
                "cell": "CellCommitsFeed",
                "params": {
                    "pusher_key": travisApiKey,
                    "stalkr_project": project,
                    "stalkr_team": team
                }
            }
        ]
    ]
  }

  return request.post('/put', dashboard)
    .then(response => {
      return Promise.resolve(response)
    })

};

export {
  get,
  put
};
