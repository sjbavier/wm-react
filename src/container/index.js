import React, { Component } from 'react'
import Container2 from './container2'

class Container extends Component {

    render(){
        return(
            <div class="container-fluid perspective effect-laydown">
                <Container2 />
            </div>
        )
    }
}

export default Container