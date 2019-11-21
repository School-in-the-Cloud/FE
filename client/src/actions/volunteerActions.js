import { axiosWithAuth } from '../utils';

const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';
const TOGGLE_TODO_START = 'TOGGLE_TODO_START';
const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
const TOGGLE_TODO_FAIL = 'TOGGLE_TODO_FAIL';

const fetchTodos = (id) => dispatch => {
    dispatch({ type: FETCH_TODOS_START });
    axiosWithAuth()
        .get(`/volunteers/${id}/todos`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
        })
}

const toggleTodo = (admin_id, user_id, todos_id, is_completed, setIsCompleted) => dispatch => {
    dispatch({ type: TOGGLE_TODO_START });
    const payload = {
        todos_id: todos_id,
        is_completed: !is_completed
    }
    axiosWithAuth()
        .put(`/admins/${admin_id}/todos`, payload)
        .then(() => {
            dispatch({ type: TOGGLE_TODO_SUCCESS });
            setIsCompleted(!is_completed);
            dispatch(fetchTodos(user_id));
        })
        .catch(err => dispatch({ type: TOGGLE_TODO_FAIL, payload: err.message }));
}

export const volunteerActionTypes = {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAIL,
    TOGGLE_TODO_START,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAIL
}

export const volunteerActionCreators = {
    fetchTodos,
    toggleTodo
}