import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

// import components
import Bookmarks from '../../bookmarks/Bookmarks'

// import actions
import { navigationCloseRequest } from './actions'
import { sidePanelOffRequest } from '../../side-panel/actions'



class Container2 extends Component {

    static propTypes = {
        click: PropTypes.func,
        navigationCloseRequest: PropTypes.func,
        sidePanelOffRequest: PropTypes.func,
        sidePanel: PropTypes.shape({
            open: PropTypes.bool,
        }),
        nav: PropTypes.shape({
            containerClassList: PropTypes.array,
            showMenuClassList: PropTypes.array,
            toggled: PropTypes.bool,
            animating: PropTypes.bool,
            open: PropTypes.bool,
        }),
        photos: PropTypes.shape({
            backgroundImg: PropTypes.string,
        }),
    }

     // value will be the event object
     click = ( clickEvent ) => {   
        clickEvent.stopPropagation()
        clickEvent.preventDefault()
        if( this.props.nav.toggled ){
            this.props.navigationCloseRequest( clickEvent )
        }
        if( this.props.sidePanel.open ) { this.props.sidePanelOffRequest() }    
    }
    
        
    render(){

        const {
            navigationCloseRequest,
            nav: {
                containerClassList,
                showMenuClassList,
                toggled,
                animating,
                open,
            },
            photos: {
                backgroundImg,
            },
        } = this.props

        return(
            <div id="container2" onClick={ this.click }
            style={ {backgroundImage: `url(${ this.props.photos.backgroundImg })`} }
            >
                <div className="wrapper">
                    <Route path="/" exact component={ Bookmarks } />
                </div>
            </div>
        )
    }
}

// map state to props with only piece of information we need
const mapStateToProps = state => ({
    nav: state.nav,
    sidePanel: state.sidePanel,
    photos: state.photos,
})

// make Redux 'Container2' and action 'navigationCloseRequest' available in this.props within component
const connectedToggle = connect( mapStateToProps, { navigationCloseRequest, sidePanelOffRequest } )( Container2 )

export default connectedToggle