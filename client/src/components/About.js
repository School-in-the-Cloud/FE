import React from 'react';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, {keyframes} from 'styled-components';
import { flip, pulse } from 'react-animations';

const pulseAnim = keyframes `${pulse}`
const cardAnim = keyframes `${flip}`

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 90vh;
  /* min-width: 650px; */
  margin: 0 auto;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  h2{
      animation: 7s ${pulseAnim};
      margin-top:100px;
      font-size: 2.5vh;
      @media screen and (max-width: 650px) {
        margin-top: 30px;
    }
  }
`

const Main = styled.div`
  width: 100%;
  min-width: 350px;
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
        height: 75vh;
        overflow: auto;
    }
    #one{
            animation: 3s ${cardAnim};
    }
    #two{
            animation: 3s ${cardAnim};
            animation-delay: 300ms;
    }
    #three{
            animation: 3s ${cardAnim};
            animation-delay: 600ms;
    }
    #four{
            animation: 3s ${cardAnim};
            animation-delay: 900ms;
    }
    #five{
            animation: 3s ${cardAnim};
            animation-delay: 1200ms;
    }
    .card{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        width: 250px;
        height: 340px;
        margin: 20px;
        padding-top: 50px;
        margin-top: 30px;
        margin-bottom: 40px;
        text-shadow: none;
        color: black;
        background-color: white;
        box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
        transition: all 300ms ease-in-out;
        &:hover{
            transform: scale(1.2);
        }
        img{
            width: 200px;
            margin-top: -75px;
            border-radius: 5px;
            box-shadow: 0 5px 9px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.22);
        }
        .title{
            font-weight: bold;
            font-size: 1.7rem;
            color: darkgray;
            margin: 12px;
            border-bottom: 1px solid black;
        }
        .name{
            margin-top: -10px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .description{
            width: 80%;
            text-align: left;
            /* font-size: 0.8rem; */
            div{
                margin: 5px 0;
            }
            span{
                font-weight: bold;
            }
            .email{
                    font-weight: normal;
                    font-style: italic;
                    font-size: 0.9rem;
                }
        }
        .button-container{
                position: absolute;
                bottom: 10px;
                display: flex;
                justify-content: space-between;
                width: 60%;
                margin-top: 30px;
                a{
                    font-size: 1.5rem;
                    color: #c6d5dd;
                    filter: drop-shadow(2px 2px 2px grey);
                    transition: all 300ms ease-in-out;
                    &:hover{
                        color: lightblue;
                    }
                }
            }
        .contact-button{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: whitesmoke;
            color: black;
            border: 1px solid grey;
            border-radius: 10px;
            width: 75px;
            height: 25px;
            box-shadow: 0 5px 9px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.22);
            margin: 15px;
            padding-bottom: 2px;
            text-decoration: none;
            text-shadow: none;
            transition: all 300ms ease-in-out;
            &:hover{
                background-color: lightgray;
                color: white;
                cursor: pointer;
            }
        }
        a{
            text-decoration: none;
        }
    }
`

function About() {

  return (
    <>
    <MainWrap>
    <h2>Meet The School In The Cloud Build Team!</h2>
    <Main>
        <div className='card' id='one'>
            <img src='../../img/profile/robert.jpg' alt='profile' />
            <div className='title'>React I / UX</div>
            <div className='name'>Robert Gordon</div>
            <div className='description'>
                Designed complete website, collaborated with React II dev and backend.
            </div>
            <div className='button-container'>
                <a href='https://github.com/RobertDGordon'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/robert-d-gordon/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href='https://rob-gordon.com'><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
        <div className='card' id='two'>
            <img src='../../img/profile/nate.jpg' alt='profile' />
            <div className='title'>React II</div>
            <div className='name'>Nate Rojanasupya</div>
            <div className='description'>
              Up and coming full stack developer. Admittedly willing to work for food and milk tea with boba.
            </div>
            <div className='button-container'>
                <a href='https://github.com/nattroj'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/nattajohn-rojanasupya-547156194/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
        <div className='card' id='three'>
            <img src='../../img/profile/patrick.jpg' alt='profile' />
            <div className='title'>Backend</div>
            <div className='name'>Patrick Stevenson</div>
            <div className='description'>
                Met MVP with endpoints.
            </div>
            <div className='button-container'>
                <a href='https://github.com/patjonstevenson/'><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
        <div className='card' id='four'>
            <img src='../../img/profile/jojo.jpg' alt='profile' />
            <div className='title'>Project Lead</div>
            <div className='name'>Jojo Zhang</div>
            <div className='description'>
                Organized team meetings, and managed product completion.
            </div>
            <div className='button-container'>
                <a href='https://github.com/nomadkitty'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/jojo-zhang'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
        <div className='card' id='five'>
            <img src='../../img/profile/hudson.jpg' alt='profile' />
            <div className='title'>Marketing</div>
            <div className='name'>Hudson Chamberlain</div>
            <div className='description'>
                Created marketing and landing page.
            </div>
            <div className='button-container'>
                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
    </Main>
    </MainWrap>
    </>
  );
}

export default About