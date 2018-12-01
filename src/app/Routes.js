import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './components/home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/signup' component={SignupForm} />
          <Route exact path='/login' component={LoginForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}
