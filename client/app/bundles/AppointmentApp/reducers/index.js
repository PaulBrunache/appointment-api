import React from 'react';
import {combineReducers} from 'redux';
import controlPanelCreateFormReducer from './controlPanelForm'
import controlPanelSearchReducer from './controlPanelSearch'


export default combineReducers({controlPanelCreateFormReducer})