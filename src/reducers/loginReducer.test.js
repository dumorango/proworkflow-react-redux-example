/**
 * Created by dumorango on 21/03/17.
 */

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import loginReducer from './loginReducer';
import * as types from '../actions/actionTypes';

describe('Login Reducer', () => {
  it('should reduce login', () => {
    const login = { user : {}, userDetails: {}};
    const type = types.LOGIN_SUCCESS;
      expect(loginReducer({}, { login, type })).toBe(login);
  });
});
