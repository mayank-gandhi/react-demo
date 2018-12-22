import React, { Component } from 'react';
import SignupForm from '../shared/signup_form';

export default class Signip extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="row">
          <div className="container col-md-4 text-center py-5">
            <h1>Sign Up</h1>
          </div>
        </div>
        <div className="row">
          <div className="container text-center col-md-4">
            <SignupForm/>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
