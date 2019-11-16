import { axiosWithAuth } from '../utils';

const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_FAIL = 'REGISTRATION_FAIL';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';


const registerUser = (values, redirect) => dispatch => {
    dispatch({type: REGISTRATION_REQUEST});

    axiosWithAuth()
        .post('/auth/register', values)
        .then(res => {
            const { user: { type }, token } = res.data;
            dispatch({type: REGISTRATION_SUCCESS, payload: type });
            sessionStorage.setItem('userType', type);
            sessionStorage.setItem('token', token);
            redirect();
        })
        .catch(err => dispatch({type: REGISTRATION_FAIL, payload: err.message}));
}

const authenticateUser = (values, redirect) => dispatch => {
    dispatch({type: LOGIN_REQUEST});

    axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
            const { user: { type }, token } = res.data;
            dispatch({type: LOGIN_SUCCESS, payload: type });
            sessionStorage.setItem('userType', type);
            sessionStorage.setItem('token', token);
            redirect();
        })
        .catch(err => dispatch({type: LOGIN_FAIL, payload: err.message}));
}

const logoutUser = () => dispatch => {
    dispatch({type: LOGOUT});
    sessionStorage.clear();
}

export const authActionTypes = {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
}

export const authActionCreators = {
    registerUser,
    authenticateUser,
    logoutUser
}