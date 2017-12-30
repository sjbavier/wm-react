import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './container'
import SidePanel from './side-panel'

import './css/vendor/glyphicons/glyphicons.css'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={this.props.initClass}>
        <SidePanel />
        <Container /> 
      </div>  
    )
  }
}

export default App;
