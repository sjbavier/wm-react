import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { sidePanelOnRequest } from '../../side-panel/actions'
import { navigationCloseRequest } from '../container2/actions'

class Nav extends Component {

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
    }

    click = ( clickEvent ) => {
        this.props.navigationCloseRequest()
        this.props.sidePanelOnRequest()
    }
    
    clack = ( e ) => {
        this.props.navigationCloseRequest()
    }

    render(){



        return (
            <nav className="outer-nav top horizontal">
               <Link to="/" onClick={ this.clack }>home</Link>
               <Link to="/photos" onClick={ this.click }>photos</Link>
               <Link to="/graphics" onClick={ this.click }>graphics</Link>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    sidePanel: state.sidePanel,
})

const connected = connect ( mapStateToProps, { navigationCloseRequest, sidePanelOnRequest })( Nav )
export default connected