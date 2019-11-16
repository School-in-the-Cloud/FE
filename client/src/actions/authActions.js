import { axiosWithAuth } from '../utils';

const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_FAIL = 'REGISTRATION_FAIL';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';


const registerUser = (values, redirect) => dispatch => {
    dispatch({type: REGISTRATION_REQUEST});

    axiosWithAuth()
        .post('/auth/register', values)
        .then(res => {
            dispatch({type: REGISTRATION_SUCCESS });
            redirect();
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('userType', res.data.user.type);
        })
        .catch(err => dispatch({type: REGISTRATION_FAIL, payload: err.message}));
}

export const authActionTypes = {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
}

export const authActionCreators = {
    registerUser
}