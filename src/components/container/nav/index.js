import React, { Component } from 'react'

class Nav extends Component {

    render(){
        return (
            <nav className="outer-nav top horizontal">
               <a href="/">Home</a>
               <a href="/reference">Reference Material</a>
               <a href="/photos">photos</a>
            </nav>
        )
    }
}

export default Nav