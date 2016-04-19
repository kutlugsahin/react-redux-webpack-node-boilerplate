//require('file?name=[name].[ext]!../index.html');
import React, {createClass} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'
import App from './App.jsx';

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
