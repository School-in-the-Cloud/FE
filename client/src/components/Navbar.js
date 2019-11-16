import React from 'react';
import { useDispatch } from 'react-redux';
import { authActionCreators } from '../actions';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Headerwrap = styled.div`
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
        color: white;
        height: 5vh;
        h1{
            text-shadow: 2px 2px 4px #000000;
            font-size: 3rem;
            margin-left: 75px;
        }
    }
`

const Navwrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActionCreators.logoutUser());
  }

  return (
    <>
    <Headerwrap>
    <header>
        <h1>School In The Cloud</h1>
        <Navwrap>
        <nav>
            <NavLink exact to='/'>Home</NavLink> {/* Should Home link to dashboard? */}
            <NavLink exact to='/admin'>Profile</NavLink> {/* Profile link to ability to edit profile? */}
            <NavLink exact to='/volunteers'>Volunteers</NavLink>
            <Link onClick={logout} to='/'>Sign out</Link>
        </nav>
        </Navwrap>
    </header>
    </Headerwrap>
    </>
  );
}

export default Navbar;