import home from './home';
import addCell from './add-cell'

// import { combineReducers } from 'redux-immutable';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  home,
  addCell
});

export default rootReducer;
