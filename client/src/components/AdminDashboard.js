import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TempSpacer = styled.div`
    width: 10px;
    height: 100px;
    border: 1px solid red;
`

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 100vw;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  h2{
      margin:55px;
  }
  div{
      display: flex;
      justify-content: space-between;
      width: 30%;
  }
  button{
      background-color: white;
      color: black;
      border-radius: 10px;
      width: 155px;
      height: 45px;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
      margin: 30px;
      &:hover{
          background-color: lightblue;
      }
  }
`

function AdminDashboard() {
  const { first_name, last_name } = useSelector(state => state.authentication.user);

  return (
    <>
    <TempSpacer>NavHere</TempSpacer>
    <Main>
        <h2>Welcome {first_name} {last_name}!</h2>
        <img
          className="main-img"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/maintenance_cn7j.svg"
          alt="Admin" width="450px"
        />
        <div>
            <button>Create To Do List</button>
            <button>Edit To Do List</button>
        </div>
    </Main>
    </>
  );
}

export default AdminDashboard