/**
 * Created by dumorango on 19/03/17.
 */

import * as types from './actionTypes';
import * as MessagesService from '../services/MessagesService';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function loadMessages(loginDetails) {
  return function (dispatch) {
    return MessagesService.getMessages(loginDetails)
      .then(messages => {
        console.log('messages', messages);
        dispatch(loadMessagesSuccess(messages));
      });
  };
}

export function removeMessageSuccess(message) {
  return { type: types.REMOVE_MESSAGE_SUCCESS, message};
}

export function removeMessage(loginDetails, message) {
  return function (dispatch) {
    return MessagesService.removeMessage(loginDetails, message)
      .then(() => {
        dispatch(removeMessageSuccess(message));
      });
  };
}
