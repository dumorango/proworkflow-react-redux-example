/**
 * Created by dumorango on 21/03/17.
 */

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import MessagesList from './MessagesList';

function setup({ messages = [], deleteMessage = () => {} }) {
  let props = {
    messages,
    deleteMessage
  };

  return shallow(<MessagesList {...props}/>);
}

describe('MessageList', () => {
  it('should message list', () => {
    //TODO
  });
  it('should call remove function from props', () => {
    //TODO
  });
});
