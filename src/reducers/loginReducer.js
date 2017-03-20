import * as types from '../actions/actionTypes';

export default function loginReducer(state = {}, action) {
  switch(action.type) {
    case(types.LOGIN_SUCCESS):
      return action.login;
    default:
      return state;
  }
}
