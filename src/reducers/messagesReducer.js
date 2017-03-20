import * as types from '../actions/actionTypes';

export default function messagesReducer(state = {}, action) {
  switch(action.type) {
    case(types.LOAD_MESSAGES_SUCCESS):
      return action.messages;
    case(types.REMOVE_MESSAGE_SUCCESS):
      return state.filter(message => message.id !== action.message.id);
    default:
      return state;
  }
}
