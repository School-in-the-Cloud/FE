import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 90vh; */
  max-width: 100vw;
  /* border: 1px solid red; */
  color: white;
  text-shadow: 2px 2px 4px #000000;
  h1{
      margin:55px;
      font-size:4rem;
  }
  div{
      display: flex;
      justify-content: space-between;
      width: 30%;
  }
  .button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: whitesmoke;
      color: black;
      border: 1px solid grey;
      border-radius: 10px;
      width: 155px;
      height: 45px;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
      margin: 30px;
      padding-bottom: 2px;
      text-decoration: none;
      text-shadow: none;
      &:hover{
          background-color: lightblue;
          color: white;
      }
  }
`

function Home() {
  return (
    <>
    <Head>
        <h1>Welcome to School In The Cloud!</h1>
        <img
          className="main-img"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/i_can_fly_7egl.svg"
          alt="Cloud" width="450px"
        />
        <div>
            <Link to='/login' className='button'>Login</Link>
            <Link to='/signup' className='button'>Sign Up</Link>
        </div>
    </Head>
    </>
  );
}

export default Home