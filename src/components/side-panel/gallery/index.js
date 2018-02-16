import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Photos from '../../photos/photos'

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
                    <Switch>
                        <Route path="/" exact component={ Photos } />
                        <Route path="/photos" component={ Photos } />
                        <Redirect to="/" />
                    </Switch>
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