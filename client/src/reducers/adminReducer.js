import { adminActionTypes } from '../actions';

const { CREATE_TODO_START, CREATE_TODO_SUCCESS, CREATE_TODO_FAIL,
        FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL,
        UPDATE_TODO_START, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL,
        DELETE_TODO_START, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL
    } = adminActionTypes;

const initialState = {
    todoLists: [],
    isLoading: false,
    error: ''
};

export const admin = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_START:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todoLists: action.payload,
                isLoading: false,
            }
            
        case FETCH_TODOS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case CREATE_TODO_START:
            return {
                ...state,
                isLoading: true,
            }
        
        case CREATE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        
        case CREATE_TODO_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        
        case UPDATE_TODO_START:
            return {
                ...state,
                isLoading: true,
            }
        
        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        
        case UPDATE_TODO_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        
        case DELETE_TODO_START:
            return {
                ...state,
                isLoading: true,
            }
        
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false
            }
        
        case DELETE_TODO_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}