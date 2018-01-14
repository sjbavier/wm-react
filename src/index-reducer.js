import { combineReducers } from 'redux'
import nav from './components/container/container2/reducer'
import sidePanel from './components/side-panel/reducer'


const IndexReducer = combineReducers({
    nav,
    sidePanel,
})

export default IndexReducer