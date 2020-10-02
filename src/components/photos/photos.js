import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectImage } from './actions'

import image0 from "../../img/gallery/photos/IMAG0070.jpg"
import image1 from "../../img/gallery/photos/IMAG0369.jpg"
import image2 from "../../img/gallery/photos/IMAG0371.jpg"
import image3 from "../../img/gallery/photos/IMAG0464.jpg"
import image4 from "../../img/gallery/photos/IMAG0502.jpg"
import image5 from "../../img/gallery/photos/IMAG0550.jpg"
import image6 from "../../img/gallery/photos/IMAG0667.jpg"
import image7 from "../../img/gallery/photos/IMAG0784.jpg"

class Photos extends Component { 

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
     localStorage.setItem("backgroundImg", clickEvent.target.getAttribute('src'))
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
</div>
)
}

}

const mapStateToProps = state => ({
photos: state.photos,
})
const connected = connect( mapStateToProps, { selectImage })( Photos )
export default connected

// *** this file was generated using the /lib/utilities/generatePhotosJS.js tool ***