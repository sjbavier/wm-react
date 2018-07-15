import { SIDEPANEL_ON, SIDEPANEL_OFF, SET_SCROLL } from './constants'

export const sidePanelOnRequest = function sidePanelOnRequest( ) {
    return {
        type: SIDEPANEL_ON
    }
}

export const sidePanelOffRequest = function sidePanelOffRequest( ) {
    return {
        type: SIDEPANEL_OFF
    }
}

export const setScroll = function setScroll( height, width ) {
    return {
        type: SET_SCROLL,
        height: height,
        width: width,
    }
}