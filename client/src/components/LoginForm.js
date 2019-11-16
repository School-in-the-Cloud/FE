import React from 'react'
import styled from 'styled-components';
import {withFormik, Form, Field} from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
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
    }
}
`

const ErrorMsg = styled.div`
    color: red;
    font-size: 0.8rem;
`

const Dropdown = styled.div`
    display: flex;
    justify-content: center;

    margin: 10px 0px;
    font-size: 0.9rem;
    text-align: center;
    .select{
        margin: 0 10px;
        width: 120px;
    }
`

const Checkbox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    span{
        font-size: 0.7rem;
        font-style: italic;
        color: darkgray;
    }
`
const LoginForm = ({values, errors, touched, status})=> {

    function validateEmail(value) {
        let error;
        if (value === 'GordonRobert@gmail.com') {
          error = 'Email already in use!';
        }
        return error;
      }

    return (
        <>
        <Container>
            <Login>
                <Form>
                    <p>Please enter the following information:</p>
                    <Field type='email' name='email' placeholder='Email' validate={validateEmail} className='formfield' />
                    {touched.email && errors.email && (<ErrorMsg>{errors.email}</ErrorMsg>)}
                    <Field type='password' name='password' placeholder='Password' className='formfield' />
                    {touched.password && errors.password && (<ErrorMsg>{errors.password}</ErrorMsg>)}
                    <button type='submit'>Login!</button>
                </Form>
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
        password: Yup.string().min(6, 'Minimum 6 characters').required('Invalid password!'),
    }),
    handleSubmit(values, {setStatus}){
    axios.post('', values)
    .then (res =>{
        setStatus(res.data);
        console.log(res)
    })
    .catch (err => console.log(err.response))
    }
})(LoginForm);

export default FormikLoginForm;