import React, { Component } from 'react';
import LoginForm from './LoginForm'

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  };

  handleInputChange = (event)=>{
    const updatedUser = { ...this.state.user, [event.target.name]: event.target.value }
    this.setState({ user: updatedUser });
  }
  

  handleSubmit = ()=>{
    console.log("user state", this.state.user);
  }

  render() {
    const{
      user
    } = this.state;

    return(      
      <React.Fragment>
        <div className="row">
          <div className="container col-md-4 text-center py-5">
            <h1>Login</h1>
          </div>
        </div>
        <div className="row">
          <div className="container text-center col-md-4">
            <LoginForm
              user={user}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              handleEnterPress={() => {}}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
};
