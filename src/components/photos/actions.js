import { SIDEPANEL_ON, SIDEPANEL_OFF } from './constants'

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