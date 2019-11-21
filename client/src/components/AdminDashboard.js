import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, {keyframes} from 'styled-components';
import {pulse} from 'react-animations';
import ToDoList from './ToDoList';
import NewListForm from './NewListForm'
import { adminActionCreators } from '../actions';

const pulseAnim = keyframes`${pulse}`

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
        animation: 1s ${pulseAnim};
    }
    .text-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    img{
        animation: 1s ${pulseAnim};
        animation-delay: 100ms;
    }
    p{
        animation: 1s ${pulseAnim};
        animation-delay: 200ms;
    }
  }
`

const Main = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
`

const ToDoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    width: 36%;
    margin-left: 50px;
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
        transition: all 300ms ease-in-out;
        &:hover{
            background-color: lightgray;
            color: white;
            cursor: pointer;
        }
  }
  .cancel-button{
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
    .lists{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: auto;
        margin: 10px;
        margin-top: 6px;
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

function AdminDashboard() {
  const { first_name, last_name } = useSelector(state => state.authentication.user);
  const admin_id = useSelector(state => state.authentication.user.id);
  const todoLists = useSelector(state => state.admin.todoLists).filter(todoList => todoList.admin_id === admin_id);
  const dispatch = useDispatch();
  const [ isCreating, setIsCreating ] = useState(false);

  useEffect(() => {
    dispatch(adminActionCreators.fetchTodos());
  }, []);

  return (
    <MainWrap>
        <h2>Welcome {first_name} {last_name}!</h2>
        <Main>
            <div className='text-image'>
            <img
            className="main-img"
            src="/img/Admin-image.svg"
            alt="Admin" width="350px"
            />
            <p>Admins, give your volunteers guidance on the best way to train students. Create, update, delete, and assign all tasks here. The power is yours!</p>
            </div>
            <ToDoListContainer>
                <div className='button-container'>
                    {isCreating ? <div className='cancel-button' onClick={() => setIsCreating(false)} >Cancel</div> : 
                    <div className='button' onClick={() => setIsCreating(true)} >Create To Do List</div>
                    }
                </div>
                {isCreating ? <NewListForm setIsCreating={setIsCreating} /> : 
                    <div className='lists'>
                        {todoLists.map(todoList => <ToDoList key={todoList.todos_id} {...todoList} />)}
                    </div>
                }
            </ToDoListContainer>
        </Main>
    </MainWrap>
  );
}

export default AdminDashboard