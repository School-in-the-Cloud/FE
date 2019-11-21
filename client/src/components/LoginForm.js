import React from 'react'
import { connect, useSelector } from 'react-redux';
import styled, {keyframes} from 'styled-components';
import { zoomIn } from 'react-animations';
import {withFormik, Form, Field} from "formik";
import * as Yup from 'yup';
import Loading from './Loading';

import { authActionCreators } from '../actions';

const zoomAnim = keyframes`${zoomIn}`

const Container = styled.div`
    animation: 1s ${zoomAnim};
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    min-height: 350px;
    width: 320px;
    border-radius: 10px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
    button{
        margin-top: 30px;
        margin-bottom: 10px;
        width: 150px;
        height: 40px;
        box-shadow: 2px 2px darkgray;
        border-radius: 5px;
        background-color: slategray;
        color: white;
        &:hover {
            background-color: lightgray;
            cursor: pointer;
    }
}
`

const ErrorMsg = styled.div`
    color: red;
    font-size: 0.8rem;
`

const LoginForm = ({values, errors, touched, status})=> {

    const isLoading = useSelector(state => state.authentication.isLoading);
    const errormessage = useSelector(state => state.authentication.error)

    return (
        <>
        <Container>
            <Login>
                { isLoading ? <Loading /> : 
                <Form>
                    <p>Please enter the following information:</p>
                    <Field type='email' name='email' placeholder='Email' className='formfield' />
                    {touched.email && errors.email && (<ErrorMsg>{errors.email}</ErrorMsg>)}
                    <Field type='password' name='password' placeholder='Password' className='formfield' />
                    {touched.password && errors.password && (<ErrorMsg>{errors.password}</ErrorMsg>)}
                    <button type='submit' disabled={isLoading}  >Login!</button>
                    { errormessage && <div className='errormessage'>Error: Invalid email or password!</div>}
                </Form>
                }
            </Login>
        </Container>
        </>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({email, password}){
        return {
            email: email || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email!').required('Email required!'),
        password: Yup.string().min(8, 'Minimum 8 characters').required('Invalid password!'),
    }),
    handleSubmit(values, {props, setStatus}){
        props.authenticateUser(values, () => props.history.push('/dashboard'));
    }
})(LoginForm);

const mapDispatchToProps = {
    authenticateUser: authActionCreators.authenticateUser
}

export default connect(null, mapDispatchToProps)(FormikLoginForm);