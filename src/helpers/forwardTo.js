import { browserHistory } from 'react-router'

const forwardTo = (location) =>
  browserHistory.push(location)

export { forwardTo };
