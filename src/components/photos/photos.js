import React, { Component } from 'react'

import image0 from "../../img/gallery/photos/IMAG0070.jpg"
import image1 from "../../img/gallery/photos/IMAG0369.jpg"
import image2 from "../../img/gallery/photos/IMAG0371.jpg"
import image3 from "../../img/gallery/photos/IMAG0464.jpg"
import image4 from "../../img/gallery/photos/IMAG0502.jpg"
import image5 from "../../img/gallery/photos/IMAG0550.jpg"
import image6 from "../../img/gallery/photos/IMAG0667.jpg"
import image7 from "../../img/gallery/photos/IMAG0784.jpg"

class Photos extends Component { 

render(){
 return (
<div className="scrollBox">
<img key={ image0 } src={ image0 } alt={ image0 } />
<img key={ image1 } src={ image1 } alt={ image1 } />
<img key={ image2 } src={ image2 } alt={ image2 } />
<img key={ image3 } src={ image3 } alt={ image3 } />
<img key={ image4 } src={ image4 } alt={ image4 } />
<img key={ image5 } src={ image5 } alt={ image5 } />
<img key={ image6 } src={ image6 } alt={ image6 } />
<img key={ image7 } src={ image7 } alt={ image7 } /></div>
)
}

}

export default Photos