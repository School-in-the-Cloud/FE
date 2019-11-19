import { axiosWithAuth } from '../utils';

const CREATE_TODO_START = 'CREATE_TODO_START';
const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
const CREATE_TODO_FAIL = 'CREATE_TODO_FAIL';

const FETCH_VOLUNTEERS_START = 'FETCH_VOLUNTEERS_START';
const FETCH_VOLUNTEERS_SUCCESS = 'FETCH_VOLUNTEERS_SUCCESS';
const FETCH_VOLUNTEERS_FAIL = 'FETCH_VOLUNTEERS_FAIL';

const createTodo = (values, id, redirect) => dispatch => {
    dispatch({ type: CREATE_TODO_START });

    axiosWithAuth()
        .post(`/admins/${id}/todos`, values)
        .then(() => {
            dispatch({ type: CREATE_TODO_SUCCESS })
            redirect();
        })
        .catch(err => dispatch({ type: CREATE_TODO_FAIL, payload: err.message }))
}

export const adminActionTypes = {
    CREATE_TODO_START,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAIL,
    FETCH_VOLUNTEERS_START,
    FETCH_VOLUNTEERS_SUCCESS,
    FETCH_VOLUNTEERS_FAIL,
}

export const adminActionCreators = {
    createTodo,
}