import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import navigationToggleRequest from '../actions'

class ToggleNav extends Component {

    static propTypes = {
        click: PropTypes.func,
        navigationToggleRequest: PropTypes.func,
        nav: PropTypes.shape({
            containerClassList: PropTypes.array,
            showMenuClassList: PropTypes.array,
            toggled: PropTypes.bool,
            animating: PropTypes.bool,
            open: PropTypes.bool,
        }),
    }

    // value will be the event object
    click = ( clickEvent ) => {
        clickEvent.stopPropagation();
        clickEvent.preventDefault();
        this.props.navigationToggleRequest( clickEvent )
    }

    render(){

        const {
            click,
            navigationToggleRequest,
            nav: {
                containerClassList,
                showMenuClassList,
                toggled,
                animating,
                open,
            },
        } = this.props

        return (
            <a id="showMenu" className={ this.props.nav.showMenuClassList.join(' ') } onClick={ this.click } >
            </a>
        )
    }
}

// map state to props with only piece of information we need
const mapStateToProps = state => ({
    nav: state.nav,
})

// make Redux 'ToggleNav' and action 'navigationToggleRequest' available in this.props within component
const connectedToggle = connect( mapStateToProps, { navigationToggleRequest } )( ToggleNav )

export default connectedToggle