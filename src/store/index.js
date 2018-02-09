import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

export default createStore(rootReducer)