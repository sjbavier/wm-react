import { combineReducers } from 'redux'
import nav from './components/container/container2/reducer'
import sidePanel from './components/side-panel/reducer'
import photos from './components/photos/reducer'
import bookmarks from './components/bookmarks/reducer'


const IndexReducer = combineReducers({
    nav,
    sidePanel,
    photos,
    bookmarks,
})

export default IndexReducer