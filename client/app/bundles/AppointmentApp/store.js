import { applyMiddleware,createStore } from 'redux';
import reducers from './reducers/index'
import {createLogger} from 'redux-logger'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), createLogger())

const configureStore = (railsProps) => (createStore(reducers, railsProps, middleware))


export default configureStore;