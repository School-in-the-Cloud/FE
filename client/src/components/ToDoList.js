import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { adminActionCreators } from '../actions';
import styled, { keyframes} from 'styled-components';
import { flipInY, zoomIn } from 'react-animations';

const flipAnim = keyframes `${flipInY}`
const zoomAnim = keyframes `${zoomIn}`

const List = styled.div`
  animation: 1s ${flipAnim};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  margin: 20px;
  margin-top: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 300ms ease-in-out;
  &:hover{
      transform: scale(1.2);
  }
  .fix-mystylingdiv{
      height: 340px;
  }
  .title{
    font-weight: bold;
    font-size: 1.7rem;
    color: darkgray;
    margin: 12px;
    border-bottom: 1px solid black;
  }
  .assigned-to{
      margin-top:-15px;
      font-size: 0.9rem;
  }
  .assigned-name{
      margin-top: -3px;
      margin-bottom: 5px;
      font-weight: bold;
  }
  .name{
      margin-top: -10px;
      margin-bottom: 5px;
      font-weight: bold;
  }
  .admin-items{
        text-align: left;
        width: 220px;
        height: 260px;
        margin: 10px 0 auto;
        /* border: 1px solid red; */
        overflow: hidden;
        p{
            margin: 0 0 5px 0;
        }
  }
  .items{
      text-align: left;
      width: 230px;
      height: 270px;
      margin: 10px 0 auto;
      overflow: hidden;
      /* border: 1px solid blue; */
      p{
          margin: 0 0 5px 0;
      }
      .item{
          margin-left: 10px;
          transition: all 300ms ease-in-out;
          &:hover{
              color: darkgrey;
              cursor: pointer;
          }
      }
      .item-completed {
          margin-left: 10px;
          color: darkgrey;
          text-decoration: line-through;
          transition: all 300ms ease-in-out;
          &:hover{
              color:black;
              cursor: pointer;
          }
      }
  }
  .button-container {
      position: absolute;
      bottom: 0 auto;
      margin-left: -16px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
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
            /* margin-bottom: 20px;
            padding-bottom: 2px; */
            text-decoration: none;
            text-shadow: none;
            transition: all 300ms ease-in-out;
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
            /* margin-bottom: 20px; */
            /* padding-bottom: 2px; */
            text-decoration: none;
            text-shadow: none;
            transition: all 300ms ease-in-out;
            &:hover{
                background-color: red;
                color: white;
                cursor: pointer;
            }
        }
  }
  .title-input{
      margin: 12px 0;
      border: none;
      border-bottom: 1px solid grey;
      width: 100%
  }
  .item-input{
      margin-bottom: 4px;
      width: 100%;
      border: none;
      border-bottom: 1px solid grey;
  }
`

function ToDoList ({ steps, name, todos_id, first_name, last_name, volunteer }){
    
    const type = useSelector(state => state.authentication.user.type);
    const admin_id = useSelector(state => state.authentication.user.id);
    const dispatch = useDispatch();
    const [ isEditing, setIsEditing ] = useState(false);
    const [ listTitle, setListTitle ] = useState(name);
    const [ isCompleted, setIsCompleted] = useState(false)
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

    console.log(listTitle);

    const updateTodoList = event => {
        event.preventDefault();
        dispatch(adminActionCreators.updateTodoList(todos, listTitle, todos_id, admin_id));
        setIsEditing(false);
    }

    const deleteTodoList = event => {
        event.preventDefault();
        dispatch(adminActionCreators.deleteTodoList(todos_id));
        setIsEditing(false);
    }

    const handleTitleChanges = event => {
        setListTitle(event.target.value);
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
        <List style={ (type === 'admin') ? {maxHeight: '415px'} : {maxHeight: '355px'}}>
            <form onSubmit={isEditing ? updateTodoList : startEditing}>
                { isEditing ? <input className='title-input' value={listTitle} onChange={handleTitleChanges} /> : <div className='title'>{name}</div> }
                {type === 'admin' ? <div className='assigned-to'>Assigned to:</div> : `` }
                <div className={type === 'admin' ? 'assigned-name' : 'name' }>{type === 'admin' ? `${volunteer[0].first_name} ${volunteer[0].last_name}` : `${first_name} ${last_name}` }</div>
                <div className={type === 'admin' ? 'admin-items' : 'items'}>
                    {steps.map((step, index) => (
                        isEditing
                            ? <input className='item-input' key={index} name={JSON.stringify(step.id)} onChange={handleChanges} value={todos[JSON.stringify(step.id)].description} />
                            : <p key={index} onClick={() => setIsCompleted(!isCompleted) } className={ isCompleted ? 'item-completed' : 'item'}>{`${index+1}.)`} {step.description}</p>
                        )
                    )}
                </div>
                {type === 'admin' && 
                    <div className='button-container'>
                        {!isEditing ? <button className='edit-button' type='submit'>Edit</button> : null }
                        {isEditing ? <button className='edit-button' type='submit'>Save</button> : null }
                        {isEditing && <button className='delete-button' onClick={deleteTodoList}>Delete</button> }
                    </div>
                }
            </form>
        </List>
    )
}

export default ToDoList