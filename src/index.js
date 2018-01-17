import React from 'react';
import ReactDOM from 'react-dom';

// Import Bootstrap styles before any custom styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

// creating with middleware, redux and router
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import  createSagaMiddleware from 'redux-saga'
import { Router, Route } from 'react-router'
import { createHashHistory } from 'history'

// Import CSS
import './index.css';

// Import all components
import App from './App';
import Graphics from './components/widgets/graphics'
import Photos from './components/widgets/photos'
import Reference from './components/widgets/reference'

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

// initiate Index Sage
sagaMiddleware.run( IndexSagas )

let root = document.getElementById('root')

// extend class 'perspective' 
root.classList.add("perspective")

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={ App }>
                <Route path="/photos" component={ Photos } />
                <Route path="/reference" component={ Reference } /> 
            </Route>
        </Router>
    </Provider>, 
    root 
);


registerServiceWorker();
