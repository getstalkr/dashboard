import {
  ADD_CELL_CHANGE_FORM,
  ADD_CELL_SENDING_REQUEST,
  ADD_CELL_REQUEST_ERROR,
  ADD_CELL_CLEAR_ERROR

} from '../actions/constants'

const initialState = {
  formState: {
    travisApiKey: '',
    project: '',
    team: ''
  },
  error: '',
  currentlySending: false
}

const addCell = function (state = initialState, action) {
  switch (action.type) {
    case ADD_CELL_CHANGE_FORM:
      return {...state, formState: action.newFormState}
    case ADD_CELL_SENDING_REQUEST:
      return {...state, currentlySending: action.sending}
    case ADD_CELL_REQUEST_ERROR:
      return {...state, error: action.error}
    case ADD_CELL_CLEAR_ERROR:
      return {...state, error: ''}
    default:
      return state
  }
}

export default addCell
