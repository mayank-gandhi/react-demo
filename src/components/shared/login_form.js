import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input} from 'reactstrap';

export default class LoginForm extends Component{
  render(){
    return(
      <Form>
        <FormGroup>
          <Label> Email </Label>
          <Input
            type='text' name='email'/>
        </FormGroup>
        <Button color="success" >Login</Button>
      </Form>
    );
  }
} 
