import React from 'react';
import {combineReducers} from 'redux';
import formReducer from './controlPanelForm'
import controlPanelSearchReducer from './controlPanelSearch'


export default combineReducers({formReducer})