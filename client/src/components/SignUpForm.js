import React from 'react'
import { connect, useSelector } from 'react-redux';
import styled from 'styled-components';
import {withFormik, Form, Field} from "formik";
import * as Yup from 'yup';
import Loading from './Loading'
import { authActionCreators } from '../actions'

const Container = styled.div`
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

// const Checkbox = styled.div `
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 0.8rem;
//     span{
//         font-size: 0.7rem;
//         font-style: italic;
//         color: darkgray;
//     }
// `
const SignUpForm = ({values, errors, touched, status})=> {

    const isLoading = useSelector(state => state.authentication.isLoading);
    const errormessage = useSelector(state => state.authentication.error)

    function validateEmail(value) {
        let error;
        if (value === 'admin@admin.com') {
          error = 'Email already in use!';
        }
        return error;
    }

    return (
        <>
        <Container>
            <Login>
                { isLoading ? <Loading /> :
                <Form>
                    <p>Please enter the following information:</p>
                    <Field type='text' name='first_name' placeholder='First name' className='formfield' />
                    {touched.first_name && errors.first_name && (<ErrorMsg>{errors.first_name}</ErrorMsg>)}
                    <Field type='text' name='last_name' placeholder='Last name' className='formfield' />
                    {touched.last_name && errors.last_name && (<ErrorMsg>{errors.last_name}</ErrorMsg>)}
                    <Field type='email' name='email' placeholder='Email' validate={validateEmail} className='formfield' />
                    {touched.email && errors.email && (<ErrorMsg>{errors.email}</ErrorMsg>)}
                    <Field type='password' name='password' placeholder='Password' className='formfield' />
                    {touched.password && errors.password && (<ErrorMsg>{errors.password}</ErrorMsg>)}
                    <Dropdown>
                        Role:
                        <Field as="select" name="type" className='select'>
                            <option defaultValue hidden value>-- select a type --</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </Field>
                    </Dropdown>    
                    {values.type === 'volunteer' &&
                    <>
                        <Field type='text' name="country" placeholder='Country' className="formfield" />
                        <Field type='text' name="availability" placeholder='Availability' className="formfield" />
                    </>}

                    <button type='submit' disable={isLoading.toString()}>Sign Up!</button>
                    { errormessage && <div className='errormessage'>{errormessage}</div>}
                </Form>
                }
            </Login>
        </Container>
        </>
    );
  }

const FormikSignUpForm = withFormik({
    mapPropsToValues({first_name, last_name, email, password, type, country, availability, tos}){
        return {
            first_name: first_name || '',
            last_name: last_name || '',
            email: email || '',
            password: password || '',
            type: type || '',
            country: country || '',
            availability: availability || '',
            // tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required('First name required!'),
        last_name: Yup.string().required('Last name required!'),
        email: Yup.string().email('Invalid email!').required('Email required!'),
        password: Yup.string().min(8, 'Minimum 8 characters').required('Invalid password!'),
        tos: Yup.bool().oneOf([true],('Please Agree To Terms of Service!'))
    }),
    handleSubmit(values, {props, setStatus}){
        props.registerUser(values, () => props.history.push('/dashboard'), setStatus);
    }
})(SignUpForm);

const mapDispatchToProps = {
    registerUser: authActionCreators.registerUser
};

export default connect(null, mapDispatchToProps)(FormikSignUpForm);