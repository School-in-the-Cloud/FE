import React from "react";
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  height: 340px;
  margin: 20px;
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

function ToDoList (props){

    return (
        <>
        <List>
            <div className='title'>{props.title}</div>
            <div className='name'>-{props.name}-</div>
            <div className='items'>
                <div>{props.item1}</div>
                <div>{props.item2}</div>
                <div>{props.item3}</div>
                <div>{props.item4}</div>
                <div>{props.item5}</div>
                <div>{props.item6}</div>
                <div>{props.item7}</div>
                <div>{props.item8}</div>
                <div>{props.item9}</div>
                <div>{props.item10}</div>
            </div>
            <div className='edit-button'>Edit</div>
        </List>
        </>
    )

}

export default ToDoList