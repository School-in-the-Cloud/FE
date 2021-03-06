import React from "react";
import styled, {keyframes} from 'styled-components';
import { flipInY } from 'react-animations';

const flipAnim = keyframes `${flipInY}`

const Card = styled.div`
  animation: 1s ${flipAnim};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 5px;
  width: 250px;
  max-height: 375px;
  margin: 20px;
  padding-top: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 300ms ease-in-out;
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
      div{
          margin: 5px 0;
      }
      span{
          font-weight: bold;
      }
      .email{
              font-weight: normal;
              font-style: italic;
              font-size: 0.8rem;
          }
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
      transition: all 300ms ease-in-out;
      &:hover{
          background-color: lightgray;
          color: white;
          cursor: pointer;
      }
  }
  a{
      text-decoration: none;
  }
`

function VolunteerCard (props){

    return (
        <>
        <Card>
            <img src='../../img/profile/missingprofile.jpg' alt='profile' />
            <div className='title'>{props.first_name}<br/>{props.last_name}</div>
            <div className='description'>
                <div><span>Country:</span> {props.country}</div>
                <div><span>Availability:</span> {props.availability}</div>
                <div><span>Email:</span> <span className='email'>{props.email}</span></div>
            </div>
            <a href={`mailto:${props.email}`}><div className='contact-button'>Contact</div></a>
        </Card>
        </>
    )

}

export default VolunteerCard