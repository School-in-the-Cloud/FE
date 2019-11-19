import { getToken, getUserType } from '../utils';
import { authActionTypes } from '../actions';

const { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL,
 LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} = authActionTypes;

const initialState = {
    isAuthenticated: getToken(),
    userType: getUserType(),
    user: {}, 
    isLoading: false,
    error: null
}

export const authentication = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
        case REGISTRATION_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        
        case LOGIN_SUCCESS:
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }

        case LOGIN_FAIL:
        case REGISTRATION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }

        default:
            return state;
    }
}