import { volunteerActionTypes } from '../actions';

const { FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL} = volunteerActionTypes;

const initialState = {
    todoLists: [],
    isLoading: false,
    error: ''
};

export const volunteer = (state=initialState, action) => {
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

        default:
            return state;
    }
}