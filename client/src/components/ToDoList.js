import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { adminActionCreators } from '../actions';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  height: 340px;
  margin: 20px;
  margin-top: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 0.3 ease;
  &:hover{
      transform: scale(1.2);
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
  .items{
      width: 80%;
      text-align: left;
      min-height: 200px;
  }
  .button-container {
      display: flex;
      justify-content: center;
  }
  .edit-button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: whitesmoke;
      color: black;
      border: 1px solid grey;
      border-radius: 10px;
      width: 55px;
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
  .delete-button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: darkred;
      color: white;
      border: 1px solid grey;
      border-radius: 10px;
      width: 55px;
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
`

function ToDoList ({ steps, name, todo_id }){
    
    const type = useSelector(state => state.authentication.user.type);
    const admin_id = useSelector(state => state.authentication.user.id);
    const dispatch = useDispatch();
    const [ isEditing, setIsEditing ] = useState(false);
    const [ todos, setTodos ] = useState(() => {
        const state = {};
        steps.forEach(step => (
            state[JSON.stringify(step.id)] = {
                id: step.id,
                description: step.description
            }
        ))
        return state;
    });

    const startEditing = event => {
        event.preventDefault();
        setIsEditing(true);
    }

    const updateTodoList = event => {
        event.preventDefault();
        dispatch(adminActionCreators.updateTodoList(todos, name, todo_id, admin_id));
        setIsEditing(false);
    }

    const handleChanges = event => {
        setTodos({
            ...todos,
            [event.target.name]: {
                id: Number(event.target.name),
                description: event.target.value
            }
        })
    }

    return (
        <List>
            <form onSubmit={isEditing ? updateTodoList : startEditing}>
                <div className='title'>{name}</div>
                <div className='name'>Volunteer</div>
                <div className='items'>
                    {steps.map((step, index) => (
                        isEditing
                            ? <input key={index} name={JSON.stringify(step.id)} onChange={handleChanges} value={todos[JSON.stringify(step.id)].description} />
                            : <p key={index}>{`${index+1}.)`} {step.description}</p>
                        )
                    )}
                </div>
                {type === 'admin' && <button className='edit-button' type='submit'>{isEditing ? 'Save' : 'Edit'}</button>
                }
            </form>
        </List>
    )
}

export default ToDoList