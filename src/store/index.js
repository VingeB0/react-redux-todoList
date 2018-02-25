import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';

//state - { dispatch, getState, subscribe }

export default createStore(reducers)