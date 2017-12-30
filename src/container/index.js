import React, { Component } from 'react'
import Container2 from './container2'

class Container extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="container" className="container-fluid perspective effect-laydown">
                <Container2 />
            </div>
        )
    }
}

export default Container