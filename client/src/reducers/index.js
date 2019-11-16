import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authReducer';

const rootReducer = combineReducers({
    authentication
});

export const store = createStore(rootReducer, applyMiddleware(thunk));