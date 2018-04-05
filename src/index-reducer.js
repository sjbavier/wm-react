import { combineReducers } from 'redux'
import nav from './components/container/container2/reducer'
import sidePanel from './components/side-panel/reducer'
import photos from './components/photos/reducer'


const IndexReducer = combineReducers({
    nav,
    sidePanel,
    photos,
})

export default IndexReducer