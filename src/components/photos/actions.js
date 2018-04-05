import { SELECT_IMAGE } from './constants'

export const selectImage = function selectImage( backgroundImg ) {
    return {
        type: SELECT_IMAGE,
        backgroundImg: backgroundImg
    }
}