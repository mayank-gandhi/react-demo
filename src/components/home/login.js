import React, { Component } from 'react';
import LoginForm from '../shared/login_form'

export default class Login extends Component {
  render() {
    return(      
      <React.Fragment>
        <div className="row">
          <div className="container col-md-4 text-center py-5">
            <h1>Login</h1>
          </div>
        </div>
        <div className="row">
          <div className="container text-center col-md-4">
            <LoginForm/>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
