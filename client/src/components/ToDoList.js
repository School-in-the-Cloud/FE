import React from "react";
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 1px solid black;
  border-radius: 5px;
  width: 250px;
  min-height: 320px;
  margin: 20px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  .title{
    font-weight: bold;
    font-size: 1.7rem;
    color: darkgray;
    margin: 12px;
    border-bottom: 1px solid black;
  }
`

function ToDoList (){

    return (
        <>
        <List>
            <div className='title'>Title of List</div>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
            <div>Item 8</div>
            <div>Item 9</div>
            <div>Item 10</div>
        </List>
        </>
    )

}

export default ToDoList