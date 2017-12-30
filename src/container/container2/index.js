import React, { Component } from 'react'
import ToggleNav from './toggle-nav'
import Nav from './nav'


class Container2 extends Component {
    render(){
        return(
            <div id="container2">
                <ToggleNav />
                <Nav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default Container2