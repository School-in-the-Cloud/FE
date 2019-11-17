import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import VolunteerCard from './VolunteerCard';

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
  img{
    margin-left: 20px;
  }
`

const ToDoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    width: 36%;
    margin-right: 50px;
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
    .lists{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: auto;
        margin: 10px;
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

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px auto;
    width: 800px;
    padding: 10px;
    background-color: white;
    /* border: 1px solid black; */
    border-radius: 10px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
    color: black;
    text-shadow: none;
    form {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      /* border: 1px solid red; */
    }    
    input{
      margin: 0 5px;
      border: none;
      border-bottom: 1px solid darkgray;
    }
    label{
      margin: 0 10px;
    }
    select{
        margin: 0 5px;
    }
    button{
        border: none;
        box-shadow: 2px 2px darkgray;
        border-radius: 5px;
        background-color: slategray;
        color: white;
        &:hover {
            background-color: lightgray;
            cursor: pointer;
        }
    }
`

function StudentDashboard() {

  const [ volunteerQuery, setVolunteerQuery ] = useState({
      name: '',
      type: '',
      dimension: ''
  });

  const { first_name, last_name } = useSelector(state => state.authentication.user);

  const handleChange = event => {
      setVolunteerQuery({
          ...volunteerQuery,
          [event.target.name]: event.target.value
      });
  };

  const handleSubmit = event => {
      event.preventDefault();
      console.log ('submitting form values:', volunteerQuery);
  }

  return (
    <>
    <MainWrap>
    <h2>Welcome {first_name} {last_name}!</h2>
    <SearchBar>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} /> {/* Go over event callbacks */}
          </label>
          <label>
            Availbility:
            <select name="type" onChange={handleChange}>
              <option value=''>Any</option>
              <option value='Planet'>Planet</option>
              <option value='Cluster'>Cluster</option>
              <option value='Space'>Space Station</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Dream'>Dream</option>
              <option value='Resort'>Resort</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </label>
          <label>
            Location:
            <select name="dimension" onChange={handleChange}>
              <option value=''>All</option>
              <option value='137'>C-137</option>
              <option value='126'>5-126</option>
              <option value='Cronenberg'>Cronenberg</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Replacement'>Replacement</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </label>
          <button>Search</button>
        </form>
      </SearchBar>
    <Main>
        <ToDoListContainer>
            <div className='button-container'>
                <h3>These are the volunteers:</h3>
            </div>
            <div className='lists'>
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
                <VolunteerCard />
            </div>
        </ToDoListContainer>
        <img
          className="main-img"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/weather_app_i5sm.svg"
          alt="Cloud" width="350px"
        />
    </Main>
    </MainWrap>
    </>
  );
}

export default StudentDashboard
