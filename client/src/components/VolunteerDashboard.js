import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { volunteerActionCreators } from '../actions';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import EditProfile from './EditProfile';

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

function VolunteerDashboard() {

  const { first_name, last_name, type, id } = useSelector(state => state.authentication.user);
  const todoLists = useSelector(state => state.volunteer.todoLists);
  const dispatch = useDispatch();

  const [ isEditingProfile, setIsEditingProfile ] = useState(false);

  useEffect(() => {
    dispatch(volunteerActionCreators.fetchTodos(id));
  }, []);

  return (
    <>
    <MainWrap>
    <h2>Welcome {first_name} {last_name}!</h2>
    <Main>
        <ToDoListContainer>
            <div className='button-container'>
                <h3>Here are your to do's:</h3>
            </div>
            <div className='lists'>
              { todoLists.map(todoList => <ToDoList key={todoList.todo_id} steps={todoList.steps} type={type} />) }
            </div>
        </ToDoListContainer>
        <div className='right-container'>
            {isEditingProfile ? <div className='cancel-button' onClick={() => setIsEditingProfile(false)} >Cancel</div> : 
            <div className='edit-profile-button' onClick={() => setIsEditingProfile(true)} >Edit Profile</div>
            }
            {isEditingProfile ? <EditProfile /> :
          <div className='text-image'>
          <img
            className="main-img"
            src="/img/Volunteer-image.svg"
            alt="Volunteer" width="350px"
          />
          <p>Thank you for being a volunteer, when knowledge is not shared it is lost.</p>
          </div>}
        </div>
    </Main>
    </MainWrap>
    </>
  );
}

export default VolunteerDashboard