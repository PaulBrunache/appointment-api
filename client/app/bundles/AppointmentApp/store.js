import { applyMiddleware,createStore } from 'redux';
import reducers from './reducers/index'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, createLogger() )

const configureStore = (railsProps) => (createStore(reducers, railsProps, middleware))


export default configureStore;