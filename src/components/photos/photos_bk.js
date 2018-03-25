import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

const imagesContext = require.context('../../img/photos', false, /\.(png|jpe?g|svg)$/)


class Photos extends Component {

    
    render(){

        let files = []

        imagesContext.keys().forEach( ( filename, i ) => {
                
                let imageName = filename.replace( /\.\//g, '')
                console.log( imageName )
                files[i] = "../../img/photos/" + imageName
                
                //    files.push( <img key={ image } src={require(`../../img/photos/${ image }`)} alt={ image } /> )
        })
        let images = files.map( image => {
            return <img key={ image } src={require( image )} alt={ image } />
        })

        return (
            <div className="scrollBox">
                { images }
            </div>
        )
    }
}

export default Photos