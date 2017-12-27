import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './container'
import SidePanel from './side-panel'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SidePanel />
        <Container /> 
      </div>  
    )
  }
}

export default App;
