/**
 * Created by dumorango on 21/03/17.
 */

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import LoginForm from './LoginForm';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function setup({ error = {}, updateField = () => {}, login = () => {} }) {
  let props = {
    error,
    login,
    updateField
  };

  return shallow(<LoginForm {...props}/>);
}

describe('Login Form', () => {
  it('should render fields', () => {
    const wrapper = setup({});
    expect(wrapper.find(TextField).length).toBe(3);
  });
  it('should update fields on change', () => {
    const error = {
      message : 'Error Message'
    };
    const wrapper = setup({error});
    expect(wrapper.find('div').filterWhere(x=>x.text() === error.message).length).toBe(1);
  });
  it('should show error message', (done) => {
    const text = 'text';
    const updateField = (event) => {
        expect(event.target.value).toBe(text);
        done();
    };
    const wrapper = setup({updateField});
    wrapper.find(TextField).first().simulate('change', {target: {value: text}});
  });
  it('should login', (done) => {
    const email = 'email';
    const password = 'password';
    const apikey = 'apikey';
    const login = (event) => {
      done();
    };
    const wrapper = setup({login});
    wrapper.find(RaisedButton).simulate('click');
  });
});
