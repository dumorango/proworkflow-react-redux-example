/**
 * Created by dumorango on 19/03/17.
 */

import React, {PropTypes} from 'react';
import MessagesList from './MessagesList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from '../../actions/messageActions';
import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';

class MessagesPage extends React.Component {

  redirectToLoginPage() {
    browserHistory.push('/');
  }

  getLoginDetails(){
    const { loginDetails } = this.props.login;
    if(!loginDetails) {
      this.redirectToLoginPage();
    }else{
      return loginDetails;
    }
  }
  loadMessages(){
    this.props.actions.loadMessages(this.getLoginDetails());
  }

  deleteMessage(message){
    this.props.actions.removeMessage(this.getLoginDetails(), message)
      .then(() => this.setState({deleteSnackOpen: true }));
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      messages : [],
      deleteSnackOpen: false
    };
    this.loadMessages = this.loadMessages.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount(){
    this.loadMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <MessagesList messages={messages} deleteMessage={this.deleteMessage}/>
        //TODO - Move the Snackbar to MessagesList. ControlerViews/Container should not have more than one View/Presentation Components
        <Snackbar
          open={this.state.deleteSnackOpen}
          message="Message Deleted"
          autoHideDuration={2000}
        />
      </div>
    );
  }
}

MessagesPage.propTypes = {
  messages: PropTypes.array,
  login: PropTypes.object,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let { messages, login } = state;
  return {
    messages: ( Array.isArray(messages) ? messages : [] ),
    login
  };
}

function mapDispatchToProps(dispatch) {
  // TODO - Implement a decorator to encapsulate handling Unauthorized errors in all actions
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
