import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectImage } from './actions'

import image0 from "../../img/gallery/graphics/CityScape8FinalPSd.jpg"
import image1 from "../../img/gallery/graphics/Glass-Lion.jpg"
import image2 from "../../img/gallery/graphics/New-Wallpaperfireice-1900.jpg"
import image3 from "../../img/gallery/graphics/RSVP.jpg"
import image4 from "../../img/gallery/graphics/Time4.jpg"
import image5 from "../../img/gallery/graphics/Tree.jpg"
import image6 from "../../img/gallery/graphics/UFO.jpg"
import image7 from "../../img/gallery/graphics/UFOfinal.jpg"
import image8 from "../../img/gallery/graphics/Watch.jpg"
import image9 from "../../img/gallery/graphics/binary_3.jpg"
import image10 from "../../img/gallery/graphics/mayan2.jpg"
import image11 from "../../img/gallery/graphics/observer.jpg"
import image12 from "../../img/gallery/graphics/ted.jpg"

class Graphics extends Component { 

   componentDidMount(){
      this.props.selectImage( image0 )
  }

   static propTypes = { 
        click: PropTypes.func,
        selectImage: PropTypes.func
  }

     click = ( clickEvent ) => { 
        clickEvent.stopPropagation()
      clickEvent.preventDefault()
       this.props.selectImage( clickEvent.target.getAttribute('src') )
 }

render(){
 const { selectImage } = this.props 
 return (
<div className="scrollBox">
<img key={ image0 } src={ image0 } alt={ image0 } onClick={ this.click } />
<img key={ image1 } src={ image1 } alt={ image1 } onClick={ this.click } />
<img key={ image2 } src={ image2 } alt={ image2 } onClick={ this.click } />
<img key={ image3 } src={ image3 } alt={ image3 } onClick={ this.click } />
<img key={ image4 } src={ image4 } alt={ image4 } onClick={ this.click } />
<img key={ image5 } src={ image5 } alt={ image5 } onClick={ this.click } />
<img key={ image6 } src={ image6 } alt={ image6 } onClick={ this.click } />
<img key={ image7 } src={ image7 } alt={ image7 } onClick={ this.click } />
<img key={ image8 } src={ image8 } alt={ image8 } onClick={ this.click } />
<img key={ image9 } src={ image9 } alt={ image9 } onClick={ this.click } />
<img key={ image10 } src={ image10 } alt={ image10 } onClick={ this.click } />
<img key={ image11 } src={ image11 } alt={ image11 } onClick={ this.click } />
<img key={ image12 } src={ image12 } alt={ image12 } onClick={ this.click } />
</div>
)
}

}

const mapStateToProps = state => ({
photos: state.photos,
})
const connected = connect( mapStateToProps, { selectImage })( Graphics )
export default connected

// *** this file was generated using the /lib/utilities/generatePhotosJS.js tool ***