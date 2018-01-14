import { NAVIGATION_OPEN, NAVIGATION_CLOSE, NAVIGATION_ANIMATION_OFF } from './constants'

export const navigationToggleRequest = function navigationToggleRequest (  ) {
    return {
        type: NAVIGATION_OPEN,
    }
}
export const navigationCloseRequest = function navigationCloseRequest (  ) {
    return {
        type: NAVIGATION_CLOSE,
    }
}
export const navigationAnimationOff = function navigationAnimationOff ( ) {
    return {
        type: NAVIGATION_ANIMATION_OFF,
    }
}

export default navigationToggleRequest