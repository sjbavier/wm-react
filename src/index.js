import React from 'react'
import ReactDOM from 'react-dom'

// Import Bootstrap styles before any custom styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

// creating with middleware, redux and router
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import  createSagaMiddleware from 'redux-saga'
// import { Router, Route } from 'react-router'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import { createHashHistory } from 'history'

// Import CSS
import './index.css';

// Import all components
import App from './App';

// Import combined reducer and saga
import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

// For create-react-app production environment
import registerServiceWorker from './registerServiceWorker';

// Iniate sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

// initiate history
const history = createHashHistory()

// eslint disable
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// create store and the combined reducers from IndexReducer
const store = createStore(
    IndexReducer,
    composeSetup( applyMiddleware( sagaMiddleware ) )
)

// initiate Index Saga
sagaMiddleware.run( IndexSagas )

let root = document.getElementById( 'root' )

// extend class 'perspective' 
root.classList.add("perspective")

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Router history={ history }>
                <App /> 
            </Router>
        </BrowserRouter>
    </Provider>, 
    root 
);


registerServiceWorker();
