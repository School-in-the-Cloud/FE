import React from 'react';
import styled from 'styled-components';

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
  height: 300px;
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
    <h2>Meet The School In The Cloud Team</h2>
    <Main>
        <Card>
            <img src='../../img/profile/robert.jpg' alt='profile' />
            <div className='title'>React I / UX</div>
            <div className='name'>Robert Gordon</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <a href={`mailto:`}><div className='contact-button'>Contact</div></a>
        </Card>
        <Card>
            <img src='../../img/profile/nate.jpg' alt='profile' />
            <div className='title'>React II</div>
            <div className='name'>Nate Rojanasupya</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <a href={`mailto:`}><div className='contact-button'>Contact</div></a>
        </Card>
        <Card>
            <img src='../../img/profile/patrick.jpg' alt='profile' />
            <div className='title'>Backend</div>
            <div className='name'>Patrick Stevenson</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <a href={`mailto:`}><div className='contact-button'>Contact</div></a>
        </Card>
        <Card>
            <img src='../../img/profile/jojo.jpg' alt='profile' />
            <div className='title'>Project Lead</div>
            <div className='name'>Jojo Zhang</div>
            <div className='description'>
                Say something nice here about me.
            </div>
            <a href={`mailto:`}><div className='contact-button'>Contact</div></a>
        </Card>
    </Main>
    </MainWrap>
    </>
  );
}

export default About