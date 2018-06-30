import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DocumentTitle from 'react-document-title';

import {
  Route,
} from 'react-router-dom'

import { Button } from 'antd-mobile';


import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';


class App extends Component {
  render() {
    return (
     
        <div >
         
         
          <Route exact path={'/'}  component={LoginScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />

         
        </div>
     
    );
  }
}

export default App;
