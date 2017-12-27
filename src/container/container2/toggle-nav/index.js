import React, { Component } from 'react'
import { Glyphicon, Button } from 'react-bootstrap'

class ToggleNav extends Component {

    render(){
        return (
            <a id="showMenu" class="em-height" >
                <Glyphicon glyph="show_lines" />
            </a>
        )
    }
}

export default ToggleNav