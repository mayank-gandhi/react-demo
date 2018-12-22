import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './components/home/dashboard'
import Login from './components/home/login'
import Signup from './components/home/signup'
import NavbarCustom from './components/shared/navbar_custom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavbarCustom/>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </React.Fragment>  
      </BrowserRouter>
    );
  }
}

export default App;
