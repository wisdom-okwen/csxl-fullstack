import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// TODO: import components

const NAME = "Claire";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(135deg, #e66465, #9198e5);
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

function App() {
  // TODO: fetch links from API and store them to display on our page!

  // TODO: finish returning
  return (
    <StyledApp>
      <p>Hello, dev! We are going to create a webpage here later.</p>
    </StyledApp>
  );
}

export default App;
