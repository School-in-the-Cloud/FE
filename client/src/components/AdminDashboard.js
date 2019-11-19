import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import { adminActionCreators } from '../actions'
// import {data} from './data/testdata';
import NewListForm from './NewListForm'

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
  const todoLists = useSelector(state => state.admin.todoLists);
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adminActionCreators.fetchTodos());
  }, [])

  return (
    <MainWrap>
        <h2>Welcome {first_name} {last_name}!</h2>
        <Main>
            <img
            className="main-img"
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/maintenance_cn7j.svg"
            alt="Admin" width="350px"
            />
            <ToDoListContainer>
                <div className='button-container'>
                    {isCreating ? <div className='cancel-button' onClick={() => setIsCreating(false)} >Cancel</div> : 
                    <div className='button' onClick={() => setIsCreating(true)} >Create To Do List</div>
                    }
                </div>
                {isCreating ? <NewListForm setIsCreating={setIsCreating} /> : 
                    <div className='lists'>
                        {todoLists.map(todoList => <ToDoList key={todoList.todo_id} {...todoList} />)}
                    </div>
                }
            </ToDoListContainer>
        </Main>
    </MainWrap>
  );
}

export default AdminDashboard