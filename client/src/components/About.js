import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 90vh;
  max-width: 100vw;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  h2{
      margin-top:100px;
      font-size: 2.5rem;
  }
`

const Main = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  height: 320px;
  margin: 20px;
  padding-top: 50px;
  margin-top: 30px;
  margin-bottom: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.6;
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
      div{
          margin: 5px 0;
      }
      span{
          font-weight: bold;
      }
      .email{
              font-weight: normal;
              font-style: italic;
              font-size: 0.8rem;
          }
  }
  .button-container{
        display: flex;
        justify-content: space-between;
        width: 60%;
        margin-top: 30px;
        a{
            font-size: 1.5rem;
            color: #c6d5dd;
            filter: drop-shadow(2px 2px 2px grey);
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
      &:hover{
          background-color: lightgray;
          color: white;
          cursor: pointer;
      }
  }
  a{
      text-decoration: none;
  }
`

function About() {

  return (
    <>
    <MainWrap>
    <h2>Meet The School In The Cloud Build Team!</h2>
    <Main>
        <Card>
            <img src='../../img/profile/robert.jpg' alt='profile' />
            <div className='title'>React I / UX</div>
            <div className='name'>Robert Gordon</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <div className='button-container'>
                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </Card>
        <Card>
            <img src='../../img/profile/nate.jpg' alt='profile' />
            <div className='title'>React II</div>
            <div className='name'>Nate Rojanasupya</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <div className='button-container'>
                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </Card>
        <Card>
            <img src='../../img/profile/patrick.jpg' alt='profile' />
            <div className='title'>Backend</div>
            <div className='name'>Patrick Stevenson</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <div className='button-container'>
                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </Card>
        <Card>
            <img src='../../img/profile/jojo.jpg' alt='profile' />
            <div className='title'>Project Lead</div>
            <div className='name'>Jojo Zhang</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <div className='button-container'>
                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </Card>
        {/* <Card>
            <img src='../../img/profile/hudson.jpg' alt='profile' />
            <div className='title'>Marketing</div>
            <div className='name'>Hudson Chamberlain</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <div className='button-container'>
                <a href=''><FontAwesomeIcon icon={faGithub} /></a>
                <a href=''><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href=''><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </Card> */}
    </Main>
    </MainWrap>
    </>
  );
}

export default About