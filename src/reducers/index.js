import { combineReducers } from "redux";
import JKs from './JKReducer';
import playground from './playgroundReducer';

export default combineReducers({
  JKs,
  playground
});
