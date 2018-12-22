import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { 
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
} from 'reactstrap';

export default class NavbarCustom extends Component{
  constructor(props){
    super(props);

    this.state ={
      isOpen: false
    }
  }

  toggle = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Mayank</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/login" className="nav-link">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup" className="nav-link">Sign up</Link>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}
