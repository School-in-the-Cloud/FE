import React from 'react';
import styled from 'styled-components';
import ToDoList from './ToDoList';

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

function VolunteerDashboard() {
  return (
    <>
    <MainWrap>
    <h2>Welcome -User Name-!</h2>
    <Main>
        <ToDoListContainer>
            <div className='button-container'>
                <h3>Here are your to do's:</h3>
            </div>
            <div className='lists'>
                <ToDoList />
                <ToDoList />
                <ToDoList />
                <ToDoList />
                <ToDoList />
                <ToDoList />
                <ToDoList />
                <ToDoList />
            </div>
        </ToDoListContainer>
        <img
          className="main-img"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/to_do_xvvc.svg"
          alt="Admin" width="350px"
        />
    </Main>
    </MainWrap>
    </>
  );
}

export default VolunteerDashboard