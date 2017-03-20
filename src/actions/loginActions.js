/**
 * Created by dumorango on 19/03/17.
 */

import * as types from './actionTypes';
import * as LoginService from '../services/LoginService';

export function logInSuccess(login) {
  return { type: types.LOGIN_SUCCESS, login};
}

export function login(loginDetails) {
  return function (dispatch) {
    return LoginService.login(loginDetails)
      .then(user => {
        dispatch(logInSuccess({
          loginDetails,
          user
        }));
      });
  };
}

