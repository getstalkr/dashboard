import { browserHistory } from 'react-router'

// Little helper function to abstract going to different pages

const forwardTo = (location) =>
  browserHistory.push(location)

export { forwardTo };
