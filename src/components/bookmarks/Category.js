import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSpecCat, setCats, setCatMaxHits, resSpecCat } from './actions'

class Category extends Component {

    static propTypes = {
        setCatMaxHits: PropTypes.func,
        setSpecCat: PropTypes.func,
        setCats: PropTypes.func,
        resSpecCat: PropTypes.func,
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


    componentDidUpdate(prevProps, prevState) {

        if( this.props.bookmarks.bookmarksData !== prevProps.bookmarks.bookmarksData && !!this.props.bookmarks.bookmarksLoaded) {
            this.initCategories()
        }
    }

    initCategories(){
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

    setCategory( cat ){
        this.props.setSpecCat( cat )
    }

    unsetCategory( cat ){
        
    }

    catReset(e) {

        this.props.resSpecCat()
    }


    render() {
        const {
            bookmarks: {
                catMaxHits,
                bookmarksLoaded,
                catSel,
            },
            sidePanel: {
                open,
            }
        } = this.props
        const cats = this.props.bookmarks.cats.map(( cat, i ) => {
            let pctOfMax = ( ( cat[1] / catMaxHits ) * 100 )
            let bar = { width: `${pctOfMax}%` } 
            let catString = cat[0]   
            return (
                <div className="flex-item" key={ i } onClick={ () => this.setCategory( catString )} >
                    <span style={ bar } className="bar"></span>
                    <div className="z2">
                        { cat[0] }
                    </div>
                </div>
            )
        })
        return (
            <div className="flex">
                { !!catSel && !!open && (
                    <div className="catRes" onClick={ () => this.catReset() }>reset
                    </div>
                )}
                { !!bookmarksLoaded && (
                     cats             
                )}
            </div>

        )
    }
}

const mapStateToProps = state => ( {
    bookmarks: state.bookmarks,
    sidePanel: state.sidePanel,
} )

const connected = connect( mapStateToProps, { setSpecCat, setCats, setCatMaxHits, resSpecCat })( Category )

export default connected