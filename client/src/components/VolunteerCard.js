import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 5px;
  width: 250px;
  /* height: 220px; */
  margin: 20px;
  padding-top: 50px;
  margin-top: 30px;
  margin-bottom: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.6;
  &:hover{
    transform: scale(1.2);
  }
  img{
      width: 200px;
      margin-top: -75px;
      margin-right: 20px;
      border-radius: 5px;
      box-shadow: 0 5px 9px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.22);
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
  .description{
      width: 80%;
      text-align: left;
      /* min-height: 200px; */
  }
  .contact-button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: whitesmoke;
      color: black;
      border: 1px solid grey;
      border-radius: 10px;
      width: 75px;
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

function VolunteerCard (props){

    return (
        <>
        <Card>
            <div className='title'>{props.first_name} {props.last_name}</div>
            <div className='description'>
                <div>Country: {props.country}</div>
                <div>Availability: {props.availability}</div>
            </div>
            <div className='contact-button'>Contact</div>
        </Card>
        </>
    )

}

export default VolunteerCard