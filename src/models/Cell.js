class Cell {

  constructor (name, apiKey, team, project) {
    this.name = name;
    this.params = {
      pusher_key: apiKey,
      stalkr_project: project,
      stalkr_team: team
    }
  }

}

export default Cell
