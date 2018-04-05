import { SELECT_IMAGE } from './constants'

const initialState = {
    backgroundImg: "",
}

const reducer = function sidePanelReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case SELECT_IMAGE:
            return {
                backgroundImg: action.backgroundImg,
            }
        default:
            return state
    }
}

export default reducer