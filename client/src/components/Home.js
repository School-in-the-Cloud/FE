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
    max-height: 85vh;
    width: 99vw;
    min-width: 350px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    overflow: auto;
    overflow-x: hidden;
    margin: 30px auto;
    /* @media screen and (max-width: 1024px) {
        min-width: 350px;
    } */
    section{
        width: 100%;
        margin-left: 20px;
        margin-top: 20px;
        min-height: 86vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow-x: hidden;
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
        @media screen and (max-width: 1024px) {
            flex-direction: column-reverse;
        }
        .text{
            width:50%;
            text-align: left;
            margin-right: 55px;
            margin-left: 100px;
            h1{
                animation: 1s ${pulseAnim};
                font-size: 2.9vw;
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
            margin-right: 55px;
            img{
                width: 50vw;
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
        overflow: hidden;
        @media screen and (max-width: 650px) {
                flex-direction: column-reverse;
        }
        .image{
            width: 25%;
            @media screen and (max-width: 650px) {
                    width: 100%;
                }
            img{
                width: 25vw;
                max-width: 250px;
                @media screen and (max-width: 650px) {
                    width: 200px;
                }
            }
            #volunteer-image{
                width: 35vw;
                min-width: 100px;
                padding-top: 30px;
                padding-right: 50px;
                @media screen and (max-width: 650px) {
                    width: 200px;
                    padding: 0;
                }
            }
        }
        .text{
            display: flex;
            align-items: flex-end;
            width:60%;
            text-align: left;
            margin-left: 55px;
            margin-top: 105px;
            @media screen and (max-width: 650px) {
                /* border: 1px solid red; */
                margin: 20px;
                margin-top: -20px;
                padding-top: 20px;
            }
            h2{
                animation: 1s ${pulseAnim};
                font-family: 'Special Elite', cursive;
                font-size: 1.8vw;
            }    
        }
    }
    #volunteer{
        @media screen and (max-width: 650px) {
            flex-direction: column;
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
            @media screen and (max-width: 1024px) {
                justify-content: center;
                margin: 10px;
            }
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
            <div id='volunteer' className='content'>
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