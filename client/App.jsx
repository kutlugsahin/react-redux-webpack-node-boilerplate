import React, {createClass, PropTypes, Component} from 'react'

var cls = {
	backgroundColor: '#ccc',
	height: '30px',
	fontSize: '28px'
}

import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'

class App extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div >	
				<div style={cls}>Hello world!!.**.!!</div>
				<div>Hello world!!!!!!</div>
			</div>
		)
	}	
}

export default App;
