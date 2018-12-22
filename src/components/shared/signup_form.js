import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input} from 'reactstrap';

export default class SignupForm extends Component{
  render(){
    return(
      <Form>
        <FormGroup>
          <Label> Id </Label>
          <Input type='text' name='id'/>
        </FormGroup>
        <FormGroup>
          <Label> Name </Label>
          <Input
            type='text' name='name' />
        </FormGroup>
        <FormGroup>
          <Label> Email </Label>
          <Input
            type='text' name='email'/>
        </FormGroup>
        <FormGroup>
          <Label> Dob </Label>
          <Input
            type='date' name='dob' />
        </FormGroup>
        <Button color="success" >Sign Up</Button>
      </Form>
    );
  }
} 
