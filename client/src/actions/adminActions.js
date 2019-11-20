import { axiosWithAuth } from '../utils';

const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

const CREATE_TODO_START = 'CREATE_TODO_START';
const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
const CREATE_TODO_FAIL = 'CREATE_TODO_FAIL';

const UPDATE_TODO_START = 'UPDATE_TODO_START'
const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL'

const fetchTodos = () => dispatch => {
    dispatch({ type: FETCH_TODOS_START });
    axiosWithAuth()
        .get('/todos')
        .then(res => {
            console.log(FETCH_TODOS_SUCCESS, res);
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({type: FETCH_TODOS_FAIL, payload: err.message }));
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
            dispatch({ type: CREATE_TODO_SUCCESS });
            dispatch(fetchTodos());
        })
        .catch(err => dispatch({ type: CREATE_TODO_FAIL, payload: err.message }))
}

const updateTodoList = (values,name, todo_id , admin_id) => dispatch => {
    dispatch({ type: UPDATE_TODO_START });

    const payload = {
        todo_id,
        name,
        steps: Object.values(values)
    }

    axiosWithAuth()
        .put(`/admins/${admin_id}/todos`, payload)
        .then(() => {
            dispatch({ type: UPDATE_TODO_SUCCESS });
            dispatch(fetchTodos());

        })
        .catch(err => dispatch({ type: UPDATE_TODO_FAIL, payload: err.message }));
}

export const adminActionTypes = {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAIL,
    CREATE_TODO_START,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAIL,
    UPDATE_TODO_START,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAIL
}

export const adminActionCreators = {
    fetchTodos,
    createTodoList,
    updateTodoList
}