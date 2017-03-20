/**
 * Created by dumorango on 21/03/17.
 */

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import { Login } from './Login';
import LoginForm from './LoginForm';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function setup(actions) {
  return mount(<Login actions={actions}/>,{
    context: {
      muiTheme: getMuiTheme()
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired
    }
  });
}

describe('Login', () => {
  it('should login with correct values', (done) => {
    const inputLoginDetails = {
      email: 'email',
      password: 'password',
      apikey: 'apikey'
    };
    const wrapper = setup({
      login: (loginDetails) => {
        expect(loginDetails).toEqual(inputLoginDetails);
        return Promise.resolve(done());
      }
    });
    wrapper.find('[name="email"]').simulate('change', {target: {name: 'email', value: inputLoginDetails.email}});
    wrapper.find('[name="password"]').simulate('change', {target: {name: 'password', value: inputLoginDetails.password}});
    wrapper.find('[name="apikey"]').simulate('change', {target: {name: 'apikey', value: inputLoginDetails.apikey}});
    const login = wrapper.find(LoginForm);
    login.props().login(new Event(''));
  });
});
