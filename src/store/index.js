import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import * as reducers from './reducers'

const rootReducer = combineReducers(reducers);
const logger = createLogger({collapsed: true})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;