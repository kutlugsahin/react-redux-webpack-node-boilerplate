import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers/reducers.js';
var combinedReducers = combineReducers(reducers);
var store = createStore(combinedReducers);
export default store;
