import { LOAD_BOOKMARKS, SORT_DATE_ASC, SORT_DATE_DESC, SPEC_CAT } from './constants'

export const loadBookmarks = function loadBookmarks( data ) {
    return {
        type: LOAD_BOOKMARKS,
        bookmarks: data,
    }
}

export const sortDateAsc = function sortDateAsc( ) {
    return {
        type: SORT_DATE_ASC
    }
}

export const sortDateDesc = function sortDateDesc( ) {
    return {
        type: SORT_DATE_DESC
    }
}

export const specCat = function specCat( cat ) {
    return {
        type: SPEC_CAT,
        cat: cat,
    }
}