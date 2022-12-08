import counterReducer from './counter.js';
import loggedReducer  from './is-logged.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged: loggedReducer
});

export default allReducers;
