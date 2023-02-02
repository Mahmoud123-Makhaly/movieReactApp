import { createStore ,applyMiddleware } from 'redux'
import { MovieReducer } from './MovieReducer'
import thunk from 'redux-thunk'
export const myStore = createStore(MovieReducer  , applyMiddleware(thunk))