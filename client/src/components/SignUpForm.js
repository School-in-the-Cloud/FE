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
const SignUpForm = ({values, errors, touched, status})=> {

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
                    <Field type='text' name='fname' placeholder='First name' className='formfield' />
                    {touched.fname && errors.fname && (<ErrorMsg>{errors.fname}</ErrorMsg>)}
                    <Field type='text' name='lname' placeholder='Last name' className='formfield' />
                    {touched.lname && errors.lname && (<ErrorMsg>{errors.lname}</ErrorMsg>)}
                    <Field type='email' name='email' placeholder='Email' validate={validateEmail} className='formfield' />
                    {touched.email && errors.email && (<ErrorMsg>{errors.email}</ErrorMsg>)}
                    <Field type='password' name='password' placeholder='Password' className='formfield' />
                    {touched.password && errors.password && (<ErrorMsg>{errors.password}</ErrorMsg>)}
                    <Dropdown>
                        Role:
                        <Field as="select" name="role" className='select'>
                            <option selected hidden value>-- select a role --</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Student">Student</option>
                            <option value="Admin">Admin</option>
                        </Field>
                    </Dropdown>    
                    {values.role === 'Volunteer' &&
                    <>
                        <Field type='text' name="country" placeholder='Country' className="formfield" />
                        <Field type='text' name="availability" placeholder='Availability' className="formfield" />
                    </>}
                    <Checkbox>
                        <label>
                        <p>Do you agree to the terms of service?
                        <Field type="checkbox" name="tos" checked={values.tos} /></p>
                        {touched.tos && errors.tos && (<ErrorMsg>{errors.tos}</ErrorMsg>)}
                        <span>View our terms of service here</span>
                        </label>
                    </Checkbox>
                    <button type='submit'>Sign Up!</button>
                </Form>
            </Login>
        </Container>
        </>
    );
  }

const FormikSignUpForm = withFormik({
    mapPropsToValues({fname, lname, email, password, role, country, availability, tos}){
        return {
            fname: fname || '',
            lname: lname || '',
            email: email || '',
            password: password || '',
            role: role || '',
            country: country || '',
            availability: availability || '',
            tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        fname: Yup.string().required('First name required!'),
        lname: Yup.string().required('Last name required!'),
        email: Yup.string().email('Invalid email!').required('Email required!'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Invalid password!'),
        tos: Yup.bool().oneOf([true],('Please Agree To Terms of Service!'))
    }),
    handleSubmit(values, {setStatus}){
    axios.post('', values)
    .then (res =>{
        setStatus(res.data);
        console.log(res)
    })
    .catch (err => console.log(err.response))
    }
})(SignUpForm);

export default FormikSignUpForm;