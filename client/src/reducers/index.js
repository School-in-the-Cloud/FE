import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authReducer';
import { admin } from './adminReducer';

const rootReducer = combineReducers({
    authentication,
    admin
});

export const store = createStore(rootReducer, applyMiddleware(thunk));