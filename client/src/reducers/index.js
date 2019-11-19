import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authReducer';
import { admin } from './adminReducer';
import { volunteer } from './volunteerReducer';

const rootReducer = combineReducers({
    authentication,
    admin,
    volunteer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));