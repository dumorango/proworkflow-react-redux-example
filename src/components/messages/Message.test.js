/**
 * Created by dumorango on 21/03/17.
 */

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Message } from './Message';

function setup({ message = {}, remove = () => {} }) {
  let props = {
    message,
    remove
  };

  return shallow(<Message {...props}/>);
}

describe('Message', () => {
  it('should render with message', () => {
    //TODO
  });
  it('should call remove function from props', () => {
    //TODO
  });
});
