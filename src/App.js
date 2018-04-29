import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './components/container'
import SidePanel from './components/side-panel'

// import CSS 
import './css/vendor/glyphicons/glyphicons.css'
import './App.css';


class App extends Component {

  componentDidMount(){
 
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
   
  }
  
  render() {
    return (
      <div className="perspective">
        <SidePanel />
        <Container /> 
      </div>  
    )
  }
}

export default App;
