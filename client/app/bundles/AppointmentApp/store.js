import { applyMiddleware,createStore } from 'redux';
import reducers from './reducers/index'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), thunk, logger())

const configureAppStore = (railsProps) => (
  createStore(reducers, railsProps, applyMiddleware)
);

export default configureAppStore;