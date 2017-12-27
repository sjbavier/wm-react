import React from 'react';
import ReactDOM from 'react-dom';
// Import Bootstrap styles before any custom styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById('root')

ReactDOM.render(<App />, root );


registerServiceWorker();
