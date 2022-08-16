import React from 'react';
import compareReducer from './compareReducer';
import {combineReducers} from 'redux';

const allReducer = () => combineReducers({
    counter:compareReducer,

})
 
export default allReducer;