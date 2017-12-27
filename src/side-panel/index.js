import React, { Component } from 'react'
import ToggleGallery from './toggle-gallery'
import Gallery from './gallery'


class SidePanel extends Component {

    

    render(){
        return(
            <div>
                <ToggleGallery />
                <Gallery />
            </div>
        )


    }
}

export default SidePanel
