import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  margin: 20px;
  padding-top: 50px;
  margin-top: 35px;
  margin-bottom: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.6;
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

const EditProfile = (props) =>{

    const { first_name, last_name, email, availability, country } = useSelector(state => state.authentication.user);

    return (
        <>
        <Card>
            <img src='../../img/profile/missingprofile.jpg' alt='profile' />
            <div className='title'>{first_name} {last_name}</div>
            <div className='description'>
                <div><span>Country:</span> Murica {country}</div>
                <div><span>Availability:</span> Freedom {availability}</div>
                <div><span>Email:</span> <span className='email'>{email}</span></div>
            </div>
            <a href={`mailto:${email}`}><div className='contact-button'>Save</div></a>
        </Card>
        </>
    )
}

export default EditProfile