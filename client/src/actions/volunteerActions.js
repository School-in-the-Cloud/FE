import { axiosWithAuth } from '../utils';

const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

const fetchTodos = (id) => dispatch => {
    dispatch({ type: FETCH_TODOS_START });
    axiosWithAuth()
        .get(`/volunteers/${id}/todos`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
        })
}

export const volunteerActionTypes = {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAIL
}

export const volunteerActionCreators = {
    fetchTodos
}