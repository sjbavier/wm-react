import { LOAD_BOOKMARKS, SORT_DATE_ASC, SORT_DATE_DESC, SPEC_CAT, SET_CATS, SET_CAT_MAX, RES_SPEC_CAT } from './constants'

const initialState = {
    bookmarksData : [],
    bookmarksLoaded: false,
    cat: '',
    catSel: false,
    cats: [],
    catMaxHits: 0,
    sortDateDesc: true,
    sortDateAsc: false,
}

const reducer = function bookmarksReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case LOAD_BOOKMARKS:
            return {
                ...state,
                bookmarksData: action.bookmarks,
                bookmarksLoaded: true,
            }      
        case SPEC_CAT:
            return {
                ...state,
                cat: action.cat,
                catSel: true,
            }
        case RES_SPEC_CAT:
            return {
                ...state,
                cat: '',
                catSel: false,
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
        case SET_CATS:
            return {
                ...state,
                cats: action.cats,
            }
        case SET_CAT_MAX:
            return {
                ...state,
                catMaxHits: action.catMaxHits,
            }
        default:
            return state
    }
}

export default reducer