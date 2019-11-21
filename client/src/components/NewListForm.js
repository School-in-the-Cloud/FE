import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adminActionCreators } from '../actions';
import { axiosWithAuth } from '../utils';
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

const slideInDownAnim = keyframes `${slideInUp}`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        margin-bottom: -10px;
    }

`

const List = styled.div`
  animation: 1s ${slideInDownAnim};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 350px;
  margin: 20px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 0.3 ease;
  form{
      margin-top: 20px;
  }
  input{
  margin: 2px 3px;
  width: 270px;
  border: 0px;
  border-bottom: 1px solid grey;
  }
  .button-container {
      display: flex;
      justify-content: center;
  }
  .title{
      width: 300px;
  }
  .dropdown{
      margin-top: 20px;
      width: 300px;
  }
  .add-input{
      margin-top: 20px;
  }
  .todo-container{
      display: flex;
      align-items: center;
      input{
          width: 278px
      }
      .plus-button{
        margin-top:10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        color: black;
        border: 1px solid grey;
        border-radius: 5px;
        padding-bottom: 2px;
        width: 20px;
        height: 20px;
        text-decoration: none;
        text-shadow: none;
        transition: all 300ms ease-in-out;
        &:hover{
            background-color: lightgray;
            color: white;
            cursor: pointer;
        }
      }
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
      transition: all 300ms ease-in-out;
      &:hover{
          background-color: lightgray;
          color: white;
          cursor: pointer;
      }
  }
`

const NewListForm = ({ setIsCreating }) => {

    
    const admin_id = useSelector(state => state.authentication.user.id);
    const dispatch = useDispatch();
    
    const [todoList, setTodoList] = useState({
        title: '',
        volunteer: '',
        todos: []
    });
    
    const [ currentTodo, setCurrentTodo ] = useState('');
    
    const [ volunteers, setVolunteers ] = useState ([])

    useEffect(() => {
        // React 1 Axios Request here! --------------------------------------------------
        axiosWithAuth()
            .get('/volunteers')
            .then(res=> {
                setVolunteers(res.data.map(volunteer => (
                    { 
                        first_name: volunteer.first_name,
                        last_name: volunteer.last_name,
                        id: volunteer.id
                    })
                ));
            })
            .catch (err => console.log('error during volunteer fetch', err.message));
        // -----------------------------------------------------------------------------
    }, []);

    const handleChanges = event => {
        setTodoList({
            ...todoList,
            [event.target.name]: event.target.value
        });
    }

    const handleCurrentTodo = event => {
        setCurrentTodo(event.target.value);
    }

    const addTodo = event => {
        event.preventDefault();
        setTodoList({
            ...todoList,
            todos: [
                ...todoList.todos,
                currentTodo
            ]
        });
        setCurrentTodo('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(adminActionCreators.createTodoList(todoList, admin_id));
        setIsCreating(false);
    }    

    return (
        <Wrapper>
            <p>Create a new list:</p>
            <List>
                
                <form onSubmit={handleSubmit}>
                    <input className='title' id='title' type='text' name='title' onChange={handleChanges} value={todoList.title} placeholder='Title of list' /><br />
                    <select className='dropdown' id='name' type='text' name='volunteer' onChange={handleChanges} value={todoList.volunteer_id}>
                        <option defaultValue hidden value>-- Select a Volunteer --</option>
                        {volunteers.map(volunteer => (
                            <option key={volunteer.id} value={volunteer.id}>{volunteer.first_name} {volunteer.last_name}</option>
                        ))}
                    </select>
                    { todoList.todos.map((todo, index) => <p key={index}>{todo}</p>) }
                    <div className='todo-container'>
                        <input className='add-input' name='currentTodo' placeholder='Add new task' onChange={handleCurrentTodo} value={currentTodo} />
                        <div className='plus-button' onClick={addTodo}>+</div>
                        </div>
                    <div className='button-container'>
                        <button className='edit-button' type='submit'>Save</button>
                    </div>
                </form>
            </List>
        </Wrapper>
    )
}

export default NewListForm