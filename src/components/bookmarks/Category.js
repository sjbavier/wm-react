import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSpecCat, setCats, setCatMaxHits, resSpecCat } from './actions'
import { sidePanelOffRequest } from '../side-panel/actions'

class Category extends Component {

    static propTypes = {
        setCatMaxHits: PropTypes.func,
        setSpecCat: PropTypes.func,
        setCats: PropTypes.func,
        resSpecCat: PropTypes.func,
        sidePanelOffRequest: PropTypes.func,
        bookmarks: PropTypes.shape({
            bookmarksData: PropTypes.array,
            bookmarksLoaded: PropTypes.bool,
            cat: PropTypes.string,
            catSel: PropTypes.bool,
            sortDateDesc: PropTypes.bool,
            sortDateAsc: PropTypes.bool,
            cats: PropTypes.array,
            catMaxHits: PropTypes.number,
        }),
        sidePanel: PropTypes.shape({
            open: PropTypes.bool,
        }),
    }

    constructor( props ) {
        super(props)
        this.state = {
                value: ''
        }
        this.searchKey = this.searchKey.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {

        if( this.props.bookmarks.bookmarksData !== prevProps.bookmarks.bookmarksData && !!this.props.bookmarks.bookmarksLoaded) {
            this.initCategories()
        }

        // in component lifecyle check for updates to props and state
        if ( this.props.bookmarks.cat !== prevProps.bookmarks.cat && this.state.value !== this.props.bookmarks.cat ) {
            this.searchKey(this.props.bookmarks.cat)
        }
        
    }

    initCategories() {
        // create array of all categories
        let catArray = []
        let sortable = []
        for ( let i = 0; i < this.props.bookmarks.bookmarksData.length; i++) {
            catArray = catArray.concat(this.props.bookmarks.bookmarksData[i].category)
        }
        // reduce array of categories into an object that contains each word as key and value of # of hits
        let counts = catArray.reduce(( prev, curr ) => {
            prev[curr] = (prev[curr] || 0) + 1
            return prev
        }, {})

        for (var keyword in counts) {
            sortable.push([keyword, counts[keyword]])
        }

        sortable.sort(function(a, b) {
            return b[1] - a[1]
        })
        
        this.props.setCatMaxHits( sortable[0][1] )
        // sorting comparison
        sortable.sort((a, b) => {
            if( a[0] < b[0]) return -1
            else if ( a[0] > b[0] ) return 1
            return 0
        })
        this.props.setCats( sortable )
    }

    setCategory( cat ) {
        this.props.setSpecCat( cat )
        // modify the UI side panel by retracting it
        this.props.sidePanelOffRequest()
    }

    catReset( e ) {
        this.props.resSpecCat()
    }

    submit( e ){
        e.preventDefault()
        e.stopPropagation()
        this.props.sidePanelOffRequest()
    }

    searchKey( e ) {
        let value = typeof( e ) === "object" ? e.target.value : e 
        value = value.toLowerCase()
        this.setState({value: value})
        this.props.setSpecCat( value )
    }


    render() {
        const {
            bookmarks: {
                catMaxHits,
                bookmarksLoaded,
                catSel,
                cats,
            },
            sidePanel: {
                open,
            }
        } = this.props

        var catFilter = cats.filter( (cat, index, origArray) => {
            if ( this.props.bookmarks.cat === "" ) {
                return true
            } else {
                return cat[0].indexOf( this.props.bookmarks.cat ) > -1
            }
        } )

        var categories = catFilter.map(( cat, i ) => {
            let pctOfMax = ( ( cat[1] / catMaxHits ) * 100 )
            let bar = { width: `${pctOfMax}%` } 
            let catString = cat[0]
            let spanStyle = {
                float: 'right',
            }
            return (
                <div className="flex-item" key={ i } onClick={ () => this.setCategory( catString )} >
                    <span style={ bar } className="bar"></span>
                    <div className="z2">
                        { cat[0] }
                        <span style={ spanStyle } >{ cat[1] }</span>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="flex search-form">
                { !!bookmarksLoaded && !!open && (
                    <form onSubmit={ this.submit }>
                        <input type="text" autoFocus={ true } value={ this.state.value } onChange={ this.searchKey } placeholder="search"></input>
                    </form> 
                )}
                { !!open && (
                    <div className="catRes" onClick={ () => this.catReset() }>reset
                    </div>
                )}
                </div>
                <div className="flex categories pad-top">
                { !!bookmarksLoaded && (
                     categories             
                )}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ( {
    bookmarks: state.bookmarks,
    sidePanel: state.sidePanel,
} )

const connected = connect( mapStateToProps, { setSpecCat, setCats, setCatMaxHits, resSpecCat, sidePanelOffRequest })( Category )

export default connected