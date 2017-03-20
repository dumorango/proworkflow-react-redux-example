/**
 * Created by dumorango on 19/03/17.
 */

import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import { browserHistory } from 'react-router';
import LoginForm from './LoginForm';

export class Login extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      loginDetails: Object.assign({}, props.loginDetails)
    };
    this.login = this.login.bind(this);
    this.updateLoginDetailsOnState = this.updateLoginDetailsOnState.bind(this);
    this.redirectToMessagesPage = this.redirectToMessagesPage.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  componentWillMount(nextProps){
    if(this.props.loginDetails){
      this.redirectToMessagesPage();
    }
  }

  redirectToMessagesPage() {
    browserHistory.push('/messages');
  }

  login(event) {
    event.preventDefault();
    this.props.actions.login(this.state.loginDetails).then(() => {
      this.redirectToMessagesPage();
    }).catch((error) => {
      this.setState({
        error
      });
    });
  }

  clearError() {
    this.setState({
      error : {}
    });
  }

  updateLoginDetailsOnState(event) {
    const field = event.target.name;
    let loginDetails = this.state.loginDetails;
    loginDetails[field] = event.target.value;
    return this.setState({loginDetails});
  }

  render() {
    return (
      <LoginForm login={this.login} updateField={this.updateLoginDetailsOnState} error={this.state.error} clearError={this.clearError}/>
    );
  }
}


Login.propTypes = {
  actions: PropTypes.object.isRequired,
  loginDetails: PropTypes.object
};

Login.contextTypes = {
  routes: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {
    loginDetails: state.login.loginDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
