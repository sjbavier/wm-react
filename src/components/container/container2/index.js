import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import components
import ToggleNav from './toggle-nav'

// import actions
import { navigationCloseRequest } from './actions'



class Container2 extends Component {

    static propTypes = {
        click: PropTypes.func,
        navigationCloseRequest: PropTypes.func,
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
        this.props.navigationCloseRequest( clickEvent )
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
        } = this.props

        return(
            <div id="container2" onClick={ this.click }>
                <ToggleNav />
                <div className="wrapper">
                    <div className="row">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

// map state to props with only piece of information we need
const mapStateToProps = state => ({
    nav: state.nav,
})

// make Redux 'Container2' and action 'navigationCloseRequest' available in this.props within component
const connectedToggle = connect( mapStateToProps, { navigationCloseRequest } )( Container2 )

export default connectedToggle