import { LOAD_BOOKMARKS, SORT_DATE_ASC, SORT_DATE_DESC, SPEC_CAT } from './constants'

const initialState = {
    bookmarksData : [],
    cat: '',
    sortDateDesc: true,
    sortDateAsc: false,
}

const reducer = function bookmarksReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case LOAD_BOOKMARKS:
            return {
                ...state,
                bookmarksData: action.bookmarks,
            }      
        case SPEC_CAT:
            return {
                ...state,
                cat: action.cat,
            }
        case SORT_DATE_ASC:
            return {
                ...state,
                sortDateDesc: false,
                sortDateAsc: true,
            }
        case SORT_DATE_DESC:
            return {
                ...state,
                sortDateDesc: true,
                sortDateAsc: false,
            }

        default:
            return state
    }
}

export default reducer