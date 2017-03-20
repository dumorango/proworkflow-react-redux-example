/**
 * Created by dumorango on 2/20/17.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, IndexLink } from  'react-router';
import * as loginActions from '../../actions/loginActions';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import UserAvatar from './UserAvatar';

const style = {margin: 5};

class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user: Object.assign({}, props.user || {})
    };
  }

  render() {
    const { user } = this.props;
    return (<AppBar
      style={{ borderRadius: 10 }}
      title="Messages"
      iconElementLeft={<FontIcon className="material-icons" style={{fontSize: 50}}>mail</FontIcon>}
      iconElementRight={<UserAvatar user={user}/>}
    />);
  }
}

Header.propTypes = {
  user: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.login.user || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
