import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Category from '../../bookmarks/Category'
import Photos from '../../photos/photos'
import Graphics from '../../photos/graphics'

class Gallery extends Component {

    static propTypes = {
        sidePanel: PropTypes.shape( {
            galleryClassList: PropTypes.array,
        } ),
    }

    render(){
        const {
            sidePanel: galleryClassList,
        } = this.props
        return(
            <div id="gallery" className={ this.props.sidePanel.galleryClassList.join('') }>
                        <Route path="/" exact component={ Category } />
                        <Route path="/photos" component={ Photos } />
                        <Route path="/graphics" component={ Graphics } />
            </div>
        )
    }
    
}

// map state to props with only information we are utilizing
const mapStateToProps = state => ( {
    sidePanel: state.sidePanel
} )

const connected = connect( mapStateToProps )( Gallery )

export default connected