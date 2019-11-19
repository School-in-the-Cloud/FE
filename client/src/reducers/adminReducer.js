import { adminActionTypes } from '../actions';

const { CREATE_TODO_START, CREATE_TODO_SUCCESS, CREATE_TODO_FAIL,
        FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL} = adminActionTypes;

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
                todos: action.payload,
                isLoading: false
            }
        
        case CREATE_TODO_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}