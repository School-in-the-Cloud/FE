import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActionCreators } from '../actions';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Headerwrap = styled.div`
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 15px;
        color: white;
        height: 5vh;
        .logo{
            display: flex;
            justify-content: space-between;
            margin-left: 75px;
        }
        h1{
            text-shadow: 2px 2px 4px #000000;
            font-size: 3rem;
            margin-left: 30px;
        }
        a{
            text-decoration: none;
            color: white;
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
            transition: all 300ms ease-in-out;
            &:hover{
                color: lightblue;
                cursor: pointer;
            }
        }
        a.active{
            color: darkblue;
            font-weight: bold;
            transition: all 300ms ease-in-out;
            &:hover{
                color: lightblue;
                font-weight: bold;
            }
        }
    }
`

function Navbar() {
  const { isAuthenticated } = useSelector(state => state.authentication);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <>
    <Headerwrap>
    <header>
        <Link to={isAuthenticated ? '/dashboard' : '/'}>
            <div className='logo'>
                <img src="/img/Main-image.svg" alt="Cloud" width="70px"/>
                <h1>School In The Cloud</h1>
            </div>
        </Link>
        <Navwrap>
        <nav>
            <NavLink exact to={isAuthenticated ? '/dashboard' : '/'}>Home</NavLink>
            <NavLink exact to='/about'>About</NavLink>
            { isAuthenticated && <Link onClick={logout} to='/'>Sign out</Link>}
        </nav>
        </Navwrap>
    </header>
    </Headerwrap>
    </>
  );
}

export default Navbar;