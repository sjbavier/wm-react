import { cancel, put, fork, take } from 'redux-saga/effects'

import { 
    NAVIGATION_OPEN,
    NAVIGATION_ANIMATION_OFF,
    NAVIGATION_CLOSE,
} from './constants'

function* navigationOn( navON ){

}

function* navigationOff( navOFF ){
    console.log("made it to navigationOff ")
    yield put( { type: NAVIGATION_ANIMATION_OFF } )
}

function* navigationWatcher () {
    while (true ) {
        // generator waiting for `NAVIGATION_OPEN`
        const navON = yield take( NAVIGATION_OPEN )

        // non-blocking spins up process `navigationOn`
        const navONTask = yield fork( navigationOn, navON )
        
        const navOFF = yield take( NAVIGATION_CLOSE )

        const navOFFTask = yield fork( navigationOff, navOFF )

        const navOver = yield take( NAVIGATION_ANIMATION_OFF )

        yield cancel( navONTask )
        yield cancel( navOFFTask )
    }   
}

export default navigationWatcher