import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authReducer';
import { admin } from './adminReducer';
import { volunteer } from './volunteerReducer';

const LOGOUT = 'LOGOUT';

const appReducer = combineReducers({
    authentication,
    admin,
    volunteer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
    sessionStorage.clear();
  }

  return appReducer(state, action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk));