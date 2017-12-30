import React, { Component } from 'react'

class ToggleNav extends Component {
    constructor(props){
        super(props)
    }
    handleClick(e){
        e.stopPropagation()
        e.preventDefault()
        let containerFluidClasses = document.getElementById('container').classList
        let iconMenuClasses = document.getElementById('showMenu').classList
        containerFluidClasses.add('animate')
        containerFluidClasses.add('modalview')
        iconMenuClasses.add('animate')
    }
    render(){
        return (
            <a id="showMenu" className="em-height glyphicons show_lines" onClick={ this.handleClick } >
            </a>
        )
    }
}

export default ToggleNav