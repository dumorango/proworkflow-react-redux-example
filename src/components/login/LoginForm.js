/**
 * Created by dumorango on 21/03/17.
 */

import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 300,
  width: 300,
  margin: '30%',
  marginTop: 50,
  textAlign: 'center',
  display: 'inline-block'
};

const LoginForm = ({ login, updateField, error = {} }) => {
  return (
    <Paper style={style} zDepth={1}>
      <TextField
        hintText="Email or username"
        floatingLabelText="Email or username"
        name="email"
        onChange={updateField}
      /><br />
      <TextField
        hintText="Password"
        type="password"
        floatingLabelText="Password"
        name="password"
        onChange={updateField}
      /><br />
      <TextField
        hintText="API Key"
        floatingLabelText="API Key"
        name="apikey"
        onChange={updateField}
      />
      <div style={{ padding: 10, color: 'red' }}>{error.message}</div>
      <RaisedButton label="Login" onClick={login}/>
    </Paper>

  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;

