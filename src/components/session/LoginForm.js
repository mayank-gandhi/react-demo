import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input} from 'reactstrap';

export default class LoginForm extends Component{
  render(){
    const{
      user: { email, password },
      handleInputChange,
      handleSubmit,
      handleEnterPress
    } = this.props;

    return(
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='text' name='email' value={email} onChange={handleInputChange} onKeyUp={handleEnterPress}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password' name='password' value={password} onChange={handleInputChange}/>
        </FormGroup>
        <Button color="success" onClick={handleSubmit}>Login</Button>
      </Form>
    );
  }
} 
