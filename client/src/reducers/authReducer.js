import { getIsAuthenticated } from '../utils';
import { authActionTypes, authActionCreators } from '../actions';

const { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL,
 LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} = authActionTypes;

const initialState = {
    isAuthenticated: getIsAuthenticated(),
    isLoading: false,
    error: null
}

export const authentication = (state=initialState, action) => {
    switch(action.type) {
        case REGISTRATION_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false
            }
        case REGISTRATION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}