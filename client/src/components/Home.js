import React from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {pulse} from 'react-animations';

const pulseAnim = keyframes`${pulse}`

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
  .main {
        /* border: 1px solid red; */
        margin-top: 150px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .text{
            width:500px;
            text-align: left;
            margin-right: 55px;
            h1{
                animation: 1s ${pulseAnim};
                font-size: 2.9rem;
                transition: all 300ms ease-in-out;
                &:hover{
                    transform: scale(1.05);
                }
            }    
        }
        .image{
            width: 50%;
            /* border: 1px solid red; */
            animation: 1s ${pulseAnim};
            animation-delay: 100ms;
            img{
                max-width: 750px;
                transition: all 300ms ease-in-out;
                &:hover{
                    transform: scale(1.05);
                }
            }
        }
    }
    .button-container{
            display: flex;
            justify-content: flex-start;
            width: 65%;
            margin-top: -65px;
          }
          .button{
            animation: 1s ${pulseAnim};
            animation-delay: 200ms;
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
            transition: all 300ms ease-in-out;
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
        <div className='main'>
            <div className='text'>
                <h1>A community that trains senior volunteers to teach students in a group or individual setting.</h1>

            </div>
            <div className='image'>
                <img className="main-img" src="/img/Main-image.svg" alt="Cloud"/>
            </div>
        </div>
        <div className='button-container'>
            <Link to='/signup' className='button'>Sign Up</Link>
        </div>
    </Head>
    </>
  );
}

export default Home