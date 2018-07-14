import { LOAD_BOOKMARKS, SORT_DATE_ASC, SORT_DATE_DESC, SPEC_CAT, SET_CATS, SET_CAT_MAX, RES_SPEC_CAT } from './constants'

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

export const setSpecCat = function setSpecCat( cat ) {
    return {
        type: SPEC_CAT,
        cat: cat,
    }
}

export const setCats = function setCats( data ) {
    return {
        type: SET_CATS,
        cats: data,
    }
}

export const setCatMaxHits = function setCatMaxHits( data ) {
    return {
        type: SET_CAT_MAX,
        catMaxHits: data,
    }
}

export const resSpecCat = function resSpecCat( ) {
    return {
        type: RES_SPEC_CAT
    }
}