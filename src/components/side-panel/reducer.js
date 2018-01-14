import { SIDEPANEL_ON, SIDEPANEL_OFF } from './constants'

const initialState = {
    galleryClassList: [],
    blurClassList: [],
    open: false,
}

const reducer = function sidePanelReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case SIDEPANEL_ON:
            return {
                galleryClassList:['viewGallery'],
                blurClassList:['blur'],
                open: true,
            }
        
        case SIDEPANEL_OFF:
            return {
                galleryClassList:[],
                blurClassList:[],
                open: false,
            }
        default:
            return state
    }
}

export default reducer