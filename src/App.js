import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './components/home'
import Login from './components/session'
import Signup from './components/registration'
import Header from './components/shared/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </React.Fragment>  
      </BrowserRouter>
    );
  }
}

export default App;
