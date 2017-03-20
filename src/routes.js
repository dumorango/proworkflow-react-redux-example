/**
 * Created by dumorango on 2/20/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/login/Login';
import MessagesPage from './components/messages/MessagesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="/messages" component={MessagesPage}/>
  </Route>
);

