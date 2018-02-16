import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

const imagesContext = require.context('../../img/photos', false, /\.(png|jpe?g|svg)$/)
const files = {}



class Photos extends Component {

    getImages( imagesContext ){

       imagesContext.keys().forEach( ( filename ) => {
           
          let image = filename.replace( /\.\//g, '')
            console.log( image )
           return <img key={ image } src={require(`../../img/photos/${ image }`)} alt={ image } /> 
       })

    }
    
    render(){

        let images = this.getImages( imagesContext )

        console.log(images)

        return (
            <div className="scrollBox">
                { images }
            </div>
        )
    }
}

export default Photos