/**
 * Created by dumorango on 21/03/17.
 */

import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import { MessagesPage } from './MessagesPage';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function setup(actions) {
  return mount(<MessagesPage actions={actions}/>,{
    context: {
      muiTheme: getMuiTheme()
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired
    }
  });
}

describe('Login', () => {
  it('should get all messages', () => {
      //TODO
  });
  it('should delete message and show snack', () => {
      //TODO
  });
});
