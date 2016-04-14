import React, {createClass} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'

var App = createClass({
    render(){
        return (
            <div>Hello world!!!!!</div>
        )
    }
});

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
