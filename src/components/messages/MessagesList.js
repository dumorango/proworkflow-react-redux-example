/**
 * Created by dumorango on 19/03/17.
 */

import React, {PropTypes} from 'react';
import Message from './Message';
import Snackbar from 'material-ui/Snackbar';

const MessageList = ({ messages, deleteMessage }) => {
  let deleteSnackOpen = false;
  return (
    <div>
      <h3>Recent Messages</h3>
      {messages.map(message => <Message key={message.id} message={message} remove={deleteMessage}/>)}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteMessage: PropTypes.func.isRequired
};

export default MessageList;
