import React from 'react'
import styled from 'styled-components';

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
    background-color: white;
    height: 400px;
    width: 270px;
    border-radius: 10px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);

`

function LoginForm() {
    return (
        <>
        <Container>
            <Login>
                Test
            </Login>
        </Container>
        </>
    );
  }

export default LoginForm