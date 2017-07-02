import { requestHandler as request } from './requestHandler';

import { DASHBOARD } from './constants'
import { statusHandler } from '../../helpers'

const get = function () {

  return request.post('/get')
    .then(response => {
      return Promise.resolve(response)
    })

};

const put = function (team, project, travisApiKey) {

  const dashboard =

  [
    {
        "name": project,
        "grid":[
          [
              {
                "cell":"CellCloudPerformance",
                "params":{
                    "pusher_key":"4646f60bdd7d4d0f2899",
                    "stalkr_project":"espinosa",
                    "stalkr_team":"getstalkr"
                }
              },
              {
                "cell":"CellTrevis",
                "params":{
                    "pusher_key": travisApiKey,
                    "stalkr_project":project,
                    "stalkr_team": team
                }
              }
          ],
          [
              {
                "cell":"CellCommitsFeed",
                "params":{
                    "pusher_key":"b15276962eac9654b76f",
                    "stalkr_project":"espinosa",
                    "stalkr_team":"getstalkr"
                }
              }
          ]
        ]
    }
  ]

  return request.post('/post', dashboard)
    .then(response => {
      return Promise.resolve(response)
    })

};

export {
  get,
  put
};
