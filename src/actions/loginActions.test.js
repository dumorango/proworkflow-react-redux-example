/**
 * Created by dumorango on 21/03/17.
 */
import expect from 'expect';
import * as loginActions from './loginActions';
import * as actionTypes from './actionTypes';

describe('Login Actions', () => {
  describe('login success', () => {
    it('should create a LOGIN_SUCCESS action', () => {
      const login = { user: {}, userDetails: {}};
      expect(loginActions.logInSuccess(login)).toEqual({
        type: actionTypes.LOGIN_SUCCESS,
        login
      });
    });
  });
});
