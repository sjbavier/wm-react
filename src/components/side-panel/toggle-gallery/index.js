import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ScrollbarSize from 'react-scrollbar-size'

// import necessary actions
import { sidePanelOnRequest,sidePanelOffRequest, setScroll } from '../actions'

class ToggleGallery extends Component {

    static propTypes = {
        click: PropTypes.func,
        setScroll: PropTypes.func,
        sidePanelOnRequest: PropTypes.func,
        sidePanelOffRequest: PropTypes.func,
        sidePanel: PropTypes.shape({
            open: PropTypes.bool,
            scrollbar: PropTypes.object,
        }),
    }

    scrollbarSizer = ( {scrollbarHeight, scrollbarWidth } ) => {
        console.log(this.props)
        this.props.setScroll( scrollbarHeight, scrollbarWidth )
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
            sidePanel: {
                scrollbar,
            }
        } = this.props

        return (
            <div>
                <ScrollbarSize onLoad={ this.scrollbarSizer } onChange={ this.scrollbarSizer } />
                <a href="" id="showGallery" onClick={ this.click } style={{right: `${scrollbar.width + 3.5}px` }}  >+</a>
            </div>
        )
    }
}

// map state to props with only piece of information we need
const mapStateToProps = state => ({
    sidePanel: state.sidePanel,
})

// make Redux 'Container2' and action 'navigationCloseRequest' available in this.props within component
const connectedToggle = connect( mapStateToProps, { sidePanelOnRequest, sidePanelOffRequest, setScroll } )( ToggleGallery )

export default connectedToggle
