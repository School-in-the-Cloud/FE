import React from 'react';
import styled from 'styled-components';

const Head = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Home() {
  return (
    <>
    <Head>
        <h1>Welcome to School In The Cloud!</h1>
        <img
          className="main-img"
          src="https://page-builder.ted.com/system/baubles/files/000/005/178/original/schoolcloud.png"
          alt="Cloud"
        />
    </Head>
    </>
  );
}

export default Home