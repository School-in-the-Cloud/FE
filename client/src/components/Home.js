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
      margin-top:105px;
      margin-bottom: -25px;
      font-size:3rem;
  }
  h2{
      width:700px;
  }
  p{
      width: 600px;
  }
  .join{
      /* font-weight: bold; */
      color: lightblue;
      text-decoration: none;
      &:hover{
          color: whitesmoke;
      }
  }
  .button-container{
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
          cursor: pointer;
      }
  }
`

function Home() {
  return (
    <>
    <Head>
        <h1>Welcome!</h1>
        <h2>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting.</h2>
        <img
          className="main-img"
          src="/img/Main-image.svg"
          alt="Cloud" width="450px"
        />
        <p>There is a wealth of knowledge available from highly qualified persons who are retiring, or already retired.  When knowledge is not shared it is lost.<br/>
        <Link to='/login' className='join'>Join us today and help share the knowledge!</Link></p>
        <div className='button-container'>
            <Link to='/login' className='button'>Login</Link>
            <Link to='/signup' className='button'>Sign Up</Link>
        </div>
    </Head>
    </>
  );
}

export default Home