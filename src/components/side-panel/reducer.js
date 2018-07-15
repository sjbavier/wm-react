import { SIDEPANEL_ON, SIDEPANEL_OFF, SET_SCROLL } from './constants'

const initialState = {
    galleryClassList: [],
    blurClassList: [],
    open: false,
    scrollbar: {
        height: 0,
        width: 0,
    },
}

const reducer = function sidePanelReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case SIDEPANEL_ON:
            return {
                ...state,
                galleryClassList:['viewGallery'],
                blurClassList:['blur'],
                open: true,
            }
        
        case SIDEPANEL_OFF:
            return {
                ...state,
                galleryClassList:[],
                blurClassList:[],
                open: false,
            }
        
        case SET_SCROLL:
            return {
                ...state,
                scrollbar: {
                    height: action.height,
                    width: action.width,
                }
            }
        default:
            return state
    }
}

export default reducer