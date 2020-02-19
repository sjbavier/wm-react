import React, { Component } from 'react'
import bookmarksJson from './bookmarksJson.json'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadBookmarks } from './actions'
import { sidePanelOffRequest } from '../side-panel/actions'

class Bookmarks extends Component {

    static propTypes = {
        bookmarks: PropTypes.shape({
            bookmarksData: PropTypes.array,
            bookmarksLoaded: PropTypes.bool,
            cat: PropTypes.string,
            sortDateDesc: PropTypes.bool,
            sortDateAsc: PropTypes.bool,
        }),
    }

    constructor(props){
        super(props)
        this.state = {
		// instantiate array that will contain bookmarks rendered
            renderMarks: []
        }
    }

    componentDidMount() {
        // try to load the bookmarks data and catch errors
	    try {
        this.props.loadBookmarks( bookmarksJson )
		} catch (e) {
			console.log(e)
        }
        // note this is data directly from json file and not the redux store
        // splitting this data allows for the rendering to contain only a subset of the original
        this.setState({ renderMarks: bookmarksJson })
    }

    componentDidUpdate(prevProps) {
        // in component lifecyle check for updates to props
        if ( this.props.bookmarks.cat !== prevProps.bookmarks.cat ) {
            this.updateBookmarks()
        }
    }

    updateBookmarks() {
        // load all the bookmarks into currBookmarks
        let currBookmarks = this.props.bookmarks.bookmarksData
        let newBookmarks = []
        // if the category was reset, set the redux store bookmarksData value
        if( this.props.bookmarks.cat === ''){
            this.setState({ renderMarks: currBookmarks })
        } else {
            for( let i = 0; i < currBookmarks.length; i++){
                // this is a linear sort using indexOf's value
                if( currBookmarks[i].category.indexOf( this.props.bookmarks.cat ) !== -1 ){
                    // building new array of matched bookmarks
                    newBookmarks.push(currBookmarks[i])
                }
        }
        console.log( newBookmarks )
        // updating state with new bookmarks array
        this.setState({renderMarks: newBookmarks })
        }
        // modify the UI side panel by retracting it
        this.props.sidePanelOffRequest()
    }

    render() {
        const {
            bookmarks: {
                cat,
                bookmarksData
            }
        } = this.props

        const bookmarksR = this.state.renderMarks.map( ( bookmark, i ) => {            
            return (
                <div className="flex-item bookmark" key={ i }>
                    <h3>
                        <a href={ bookmark.link } target="_blank" rel="noopener noreferrer">{ bookmark.title }</a>
                    </h3>
                    <div className="cat">{ bookmark.category.join(', ') }</div>
                </div> 
            )
        })
        return (
            <div className="flex">
                { bookmarksR }
            </div>

        )
    }
}

const mapStateToProps = state => ( {
    bookmarks: state.bookmarks
} )

const connected = connect( mapStateToProps, { loadBookmarks, sidePanelOffRequest })( Bookmarks )

export default connected
