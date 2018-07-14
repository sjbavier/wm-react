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
            renderMarks: []
        }
    }

    componentDidMount() {
        this.props.loadBookmarks( bookmarksJson )
        this.setState({ renderMarks: bookmarksJson })
    }

    componentDidUpdate(prevProps) {
        if ( this.props.bookmarks.cat !== prevProps.bookmarks.cat ) {
            this.updateBookmarks()
        }
    }

    updateBookmarks() {
        let currBookmarks = this.props.bookmarks.bookmarksData
        let newBookmarks = []

        for( let i = 0; i < currBookmarks.length; i++){
            if( currBookmarks[i].category.indexOf( this.props.bookmarks.cat ) !== -1 ){
                newBookmarks.push(currBookmarks[i])
            }
        }
        console.log( newBookmarks )
        this.setState({renderMarks: newBookmarks })
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