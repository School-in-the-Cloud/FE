import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
    position: absolute;
    margin: 20px auto;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    color: rgba(235, 235, 255, 0.58); 
`

function Footer() {

  return (
    <>
        <FooterWrap>
            <footer>
                {'\u00A9'}2019 School-In-The-Cloud
            </footer>
        </FooterWrap>
    </>
  );
}

export default Footer