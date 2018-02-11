import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';

export default createStore(reducers)