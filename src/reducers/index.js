import {combineReducers} from 'redux';
import login from './loginReducer';
import messages from './messagesReducer';

const rootReducer = combineReducers({
  login,
  messages
});

export default rootReducer;
