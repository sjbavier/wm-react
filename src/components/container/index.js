import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import components
import Container2 from './container2'
import Nav from './nav'

class Container extends Component {

    static propTypes = {
        sidePanel: PropTypes.array,
        nav: PropTypes.shape( {
            containerClassList: PropTypes.array,
            showMenuClassList: PropTypes.array,
            toggled: PropTypes.bool,
            animating: PropTypes.bool,
            open: PropTypes.bool,
        }),
    }


    render(){

        const {
            sidePanel,
            nav: {
                containerClassList,
                showMenuClassList,
                toggled,
                animating,
                open,
            },
        } = this.props

        return(
            <div id="container" className={ this.props.nav.containerClassList.concat( this.props.sidePanel ).join(' ') }>
                <Container2 />
                <Nav />
            </div>
        )
    }
}

// map state to props with only information we are utilizing
const mapStateToProps = state => ({
    sidePanel: state.sidePanel.blurClassList,
    nav: state.nav
})

const connected = connect( mapStateToProps )( Container )

export default connected