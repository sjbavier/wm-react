import {
    NAVIGATION_OPEN,
    NAVIGATION_ANIMATION_OFF,
    NAVIGATION_CLOSE,
} from './constants'

const initialState = {
    containerClassList: [ 'container-fluid', 'perspective', 'effect-laydown', 'modalview', ],
    showMenuClassList: [ 'em-height', 'glyphicons', 'show_lines', ],
    toggled: false,
    animating: false,
    open: false,
}

const reducer = function navReducer ( state = initialState, action ) {
    switch ( action.type ){
        case NAVIGATION_OPEN:
            return {
                containerClassList: [ 'container-fluid', 'perspective', 'effect-laydown', 'modalview', 'animate', ],
                showMenuClassList: [ 'em-height', 'glyphicons', 'show_lines', 'animate', ],
                toggled: true,
                animating: true,
                open: false,
            }
        case NAVIGATION_ANIMATION_OFF:
            return {
                containerClassList: [ 'container-fluid', 'perspective', 'effect-laydown', 'modalview', ],
                showMenuClassList: [ 'em-height', 'glyphicons', 'show_lines',  ],
                toggled: false,
                animating: false,
                open: true,
            }
        case NAVIGATION_CLOSE:
            return {
                containerClassList: [ 'container-fluid', 'perspective', 'effect-laydown', 'modalview', ],
                showMenuClassList: [ 'em-height', 'glyphicons', 'show_lines', 'animate', ],
                toggled: false,
                animating: true,
                open: false,
            }
        default: 
            return state
    }
}

export default reducer