import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adminActionCreators } from '../actions';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 350px;
  /* height: 340px; */
  margin: 20px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 0.3 ease;
  /* &:hover{
      transform: scale(1.2);
  } */
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
        dispatch(adminActionCreators.createTodoList(todoList, admin_id ));
        dispatch(adminActionCreators.fetchTodos());
        setIsCreating(false);
    }    

    return (
        <Wrapper>
            <List>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                        <input id='title' type='text' name='title' onChange={handleChanges} value={todoList.title} /><br />

                    <select id='name' type='text' name='volunteer' onChange={handleChanges} value={todoList.volunteer_id}>
                        <option defaultValue hidden value>-- select a volunteer --</option>
                        <option value='7'>Brad Zickafoose</option>
                        <option value='5'>Erika Matsumoto</option>
                    </select>

                    { todoList.todos.map((todo, index) => <p key={index}>{todo}</p>) }
                    <input name='currentTodo' placeholder='Add new task' onChange={handleCurrentTodo} value={currentTodo} />
                    <button onClick={addTodo}>+</button>

                    <div className='button-container'>
                        <button className='edit-button' type='submit'>Save</button>
                    </div>
                </form>
            </List>
        </Wrapper>
    )
}

export default NewListForm