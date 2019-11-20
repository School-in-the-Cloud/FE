import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const FooterWrap = styled.div`
    position: absolute;
    margin: 20px auto;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    
    a{
        text-decoration:none;
        color: rgba(235, 235, 255, 0.58);
        &:hover{
            color: white;
        }
    }
`

function Footer() {

  return (
    <>
        <FooterWrap>
            <footer>
                <Link to='/about'>{'\u00A9'}2019 School-In-The-Cloud</Link>
            </footer>
        </FooterWrap>
    </>
  );
}

export default Footer