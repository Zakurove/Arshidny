import { combineReducers } from "redux";
import errors from './errors';
import messages from './messages';
import auth from './auth';
import announcements from './announcements';


export default combineReducers({
  announcements,
  errors,
  messages,
  auth
});
