import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Headerwrap = styled.div`
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px;
        color: white;
        h1{
            text-shadow: 2px 2px 4px #000000;
            font-size: 3rem;
            margin-left: 75px;
        }
    }
`

const Navwrap = styled.div`
    nav{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        a{  
            margin: 0 50px;
            color: white;
            text-decoration: none;
            &:hover{
                color: lightblue;
            }
        }
        a.active{
            color: darkblue;
            font-weight: bold;
            &:hover{
                color: lightblue;
                font-weight: bold;
            }
        }
    }
`

function Navbar() {
  return (
    <>
    <Headerwrap>
    <header>
        <h1>School In The Cloud</h1>
        <Navwrap>
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/navbar'>Profile</NavLink>
            <NavLink exact to='/'>Volunteers</NavLink>
            <NavLink exact to='/'>Sign out</NavLink>
        </nav>
        </Navwrap>
    </header>
    </Headerwrap>
    </>
  );
}

export default Navbar;