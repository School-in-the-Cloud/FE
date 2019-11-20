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
      margin:55px;
  }
`

const Main = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  img{
    margin-left: 20px;
  }
  .right-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
  }
  .edit-profile-button {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    color: white;
    border: 1px solid grey;
    border-radius: 10px;
    min-width: 155px;
    height: 45px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
    padding-bottom: 2px;
    text-decoration: none;
    text-shadow: none;
    &:hover{
        background-color: lightgray;
        color: white;
        cursor: pointer;
    }
  }
  .cancel-button {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    color: white;
    border: 1px solid grey;
    border-radius: 10px;
    min-width: 155px;
    height: 45px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
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

const ToDoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    width: 36%;
    margin-right: 50px;
    .button-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 60px;
    }
    .button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: lightblue;
      color: white;
      border: 1px solid grey;
      border-radius: 10px;
      min-width: 155px;
      height: 45px;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
      margin: 30px;
      padding-bottom: 2px;
      text-decoration: none;
      text-shadow: none;
      &:hover{
          background-color: lightgray;
          color: white;
          cursor: pointer;
      }
  }
    .lists{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: auto;
        margin: 10px;
        margin-left: 2px;
    }
    .lists::-webkit-scrollbar {
    width: 5px;
    }
    .lists::-webkit-scrollbar-track {
    }
    .lists::-webkit-scrollbar-thumb {
    background: lightgray;
    height: 100px; 
    }
    .lists::-webkit-scrollbar-thumb:hover {
    background: #888; 
    }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
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
      margin-right: 20px;
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
            <img src='https://ca.slack-edge.com/T4JUEB3ME-UN66JA72N-44abe8ad8258-512' alt='profile' />
            <div className='title'>Title</div>
            <div className='name'>Name</div>
            <div className='description'>
                Say something nice here.
            </div>
            <a href={`mailto:`}><div className='contact-button'>Contact</div></a>
        </Card>
    </Main>
    </MainWrap>
    </>
  );
}

export default About