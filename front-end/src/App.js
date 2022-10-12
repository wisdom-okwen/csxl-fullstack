import { useSlotProps } from '@mui/base';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from './components/link/Link';
import UserAvatar from './components/UserAvatar';

const NAME = "";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(teal, green, yellow);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Poppins', sans-serif;
  gap: 16px;
`
const StyledH2 = styled.h2`
  margin: none;
  color: teal;
`
const links = [{url: "https://youtube.com/", display_name: "YouTube"}, {url: "https://yafghana.org/", display_name: "YAF Ghana"}]

function App() {
  // TODO: fetch links from API and store them to display on our page!

  // TODO: finish returning
  return (
    <StyledApp>
      <StyledH2>
        <h2>My First React Program</h2>
      </StyledH2>
      <UserAvatar alt="My Profile Picture" src="https://yafghana.org/wp-content/uploads/2022/06/WISDOM-OKWEN.jpg"/>
      {links.map(entry => (
        <Link url={entry.url} display_name={entry.display_name} />
      ))}

    </StyledApp>
  );
}

export default App;
