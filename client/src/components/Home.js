import React from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {pulse} from 'react-animations';

const pulseAnim = keyframes`${pulse}`

const Head = styled.section`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    height: 86vh;
    width: 99vw;
    min-width: 760px;
    /* border: 1px solid red; */
    color: white;
    text-shadow: 2px 2px 4px #000000;
    overflow: auto;
    section{
        /* border: 1px solid red; */
        width: 90%;
        margin-left: 20px;
        min-height: 86vh;
        min-width: 760px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #second{
        background-color: white;
    }
    h1, h2{     
        transition: all 300ms ease-in-out;
        &:hover{
            transform: scale(1.05);
        }
    }
    img{
        transition: all 300ms ease-in-out;
        &:hover{
            transform: scale(1.05);
        }
    } 
    .main {
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
    .content{
        position: relative;
        margin: 10px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: #6c63ff;
        text-shadow: none;
        .image{
            width: 20%;
            img{
                max-width: 250px;
            }
            #volunteer-image{
                max-width: 350px;
            }
        }
        .text{
            display: flex;
            align-items: flex-end;
            width:60%;
            text-align: left;
            margin-left: 55px;
            margin-top: 105px;
            /* border: 1px solid red; */
            h2{
                animation: 1s ${pulseAnim};
                font-family: 'Special Elite', cursive;
                font-size: 1.8rem;
            }    
        }
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
    }
    &::-webkit-scrollbar-thumb {
        background: lightgray;
        height: 100px; 
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #888; 
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
        <section>
            <div className='main'>
                <div className='text'>
                    <h1>A community that trains senior volunteers to teach students in a group or individual setting.</h1>

                </div>
                <div className='image'>
                    <img src="/img/Main-image.svg" alt="Friends"/>
                </div>
            </div>
            <div className='button-container'>
                <Link to='/signup' className='button'>Sign Up</Link>
            </div>
        </section>
        <section id='second'>
            <div className='content'>
                <div className='image'>
                    <img src="/img/Student-image.svg" alt="Friends"/>
                </div>
                <div className='text'>
                    <h2>We help kids in communities with high student to teacher ratios.<br/>Students can learn from our experienced voluteers.</h2>
                </div>
            </div>
            <div className='content'>
                <div className='text'>
                    <h2>We provide retired professional a sense of purpose.<br/>Our voluteers can pick up tasks and teach students with their wealth of knowledge</h2>
                </div>
                <div className='image'>
                    <img id='volunteer-image' src="/img/Volunteer-image.svg" alt="Volunteer"/>
                </div>
            </div>
            <div className='content'>
            <div className='image'>
                    <img src="/img/Admin-image.svg" alt="Admin"/>
                </div>
                <div className='text'>
                    <h2>Our skilled site admins bridge the gap by connecting volunteers with students</h2>
                </div>
            </div>
        </section>
    </Head>
    </>
  );
}

export default Home