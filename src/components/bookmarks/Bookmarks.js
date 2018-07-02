import React, { Component } from 'react'
import bookmarksJson from './bookmarksJson.json'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadBookmarks } from './actions'

class Bookmarks extends Component {

    static propTypes = {
        bookmarks: PropTypes.shape({
            bookmarksData: PropTypes.array,
            cat: PropTypes.string,
            sortDateDesc: PropTypes.bool,
            sortDateAsc: PropTypes.bool,
        }),
    }

    componentDidMount() {
        console.log( bookmarksJson )

        this.props.loadBookmarks( bookmarksJson )
    }

    render() {
        const bookmarksR = this.props.bookmarks.bookmarksData.map( ( bookmark, i ) => {
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

const connected = connect( mapStateToProps, { loadBookmarks })( Bookmarks )

export default connected