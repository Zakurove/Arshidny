import { combineReducers } from "redux";
import announcements from "./announcements";
import errors from './errors';
import messages from './messages';
import auth from './auth';



export default combineReducers({
  announcements,
  errors,
  messages,
  auth
});