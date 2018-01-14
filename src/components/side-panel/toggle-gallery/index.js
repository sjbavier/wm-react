import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import necessary actions
import { sidePanelOnRequest,sidePanelOffRequest } from '../actions'

class ToggleGallery extends Component {

    static propTypes = {
        click: PropTypes.func,
        sidePanelOnRequest: PropTypes.func,
        sidePanelOffRequest: PropTypes.func,
        sidePanel: PropTypes.shape({
            open: PropTypes.bool,
        }),
    }
    // value will be the event object
    click = ( clickEvent ) => {   
        clickEvent.stopPropagation();
        clickEvent.preventDefault();
        if( this.props.sidePanel.open ){
            this.props.sidePanelOffRequest()
        }
        else {
            this.props.sidePanelOnRequest()
        }
    }

    render(){
        const {
            sidePanelOffRequest,
            sidePanelOnRequest,
            sidePanel: {
                open,
            }
        } = this.props

        return (
            <a href="/" id="showGallery" onClick={ this.click }  >+</a>
        )
    }
}

// map state to props with only piece of information we need
const mapStateToProps = state => ({
    sidePanel: state.sidePanel,
})

// make Redux 'Container2' and action 'navigationCloseRequest' available in this.props within component
const connectedToggle = connect( mapStateToProps, { sidePanelOnRequest, sidePanelOffRequest } )( ToggleGallery )

export default connectedToggle
