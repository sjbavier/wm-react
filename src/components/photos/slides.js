import React, { Component } from 'react'

import image0 from "../../img/gallery/slides/CityScape8FinalPSd.jpg"
import image1 from "../../img/gallery/slides/Glass-Lion.jpg"
import image2 from "../../img/gallery/slides/New-Wallpaperfireice-1900.jpg"
import image3 from "../../img/gallery/slides/RSVP.jpg"
import image4 from "../../img/gallery/slides/Time4.jpg"
import image5 from "../../img/gallery/slides/Tree.jpg"
import image6 from "../../img/gallery/slides/UFO.jpg"
import image7 from "../../img/gallery/slides/UFOfinal.jpg"
import image8 from "../../img/gallery/slides/Watch.jpg"
import image9 from "../../img/gallery/slides/binary_3.jpg"
import image10 from "../../img/gallery/slides/mayan2.jpg"
import image11 from "../../img/gallery/slides/observer.jpg"
import image12 from "../../img/gallery/slides/ted.jpg"

class Slides extends Component { 

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
<img key={ image7 } src={ image7 } alt={ image7 } />
<img key={ image8 } src={ image8 } alt={ image8 } />
<img key={ image9 } src={ image9 } alt={ image9 } />
<img key={ image10 } src={ image10 } alt={ image10 } />
<img key={ image11 } src={ image11 } alt={ image11 } />
<img key={ image12 } src={ image12 } alt={ image12 } /></div>
)
}

}

export default Slides