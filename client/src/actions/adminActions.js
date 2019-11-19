import { axiosWithAuth } from '../utils';

const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

const CREATE_TODO_START = 'CREATE_TODO_START';
const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
const CREATE_TODO_FAIL = 'CREATE_TODO_FAIL';

const fetchTodos = () => dispatch => {
    dispatch({ type: FETCH_TODOS_START });
    axiosWithAuth()
        .get('/todos')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
        })
}

const createTodoList = (values, id) => dispatch => {
    dispatch({ type: CREATE_TODO_START });

    const payload = {
        volunteer_id: values.volunteer,
        name: values.title,
        items: values.todos
    }

    axiosWithAuth()
        .post(`/admins/${id}/todos`, payload)
        .then(() => {
            dispatch({ type: CREATE_TODO_SUCCESS })
        })
        .catch(err => dispatch({ type: CREATE_TODO_FAIL, payload: err.message }))
}

export const adminActionTypes = {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAIL,
    CREATE_TODO_START,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAIL,
}

export const adminActionCreators = {
    fetchTodos,
    createTodoList,
}