import React from 'react';
import ReactDOM from 'react-dom';

import App from 'src/App.jsx';
import {store} from 'src/store';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


ReactDOM.render( <App store={store} />, document.getElementById('root') );