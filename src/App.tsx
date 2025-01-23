import { useState } from "react";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { StyledFlexCenter, StyledFlexColumn } from "./styles/containers";

const StyledContainer = styled(StyledFlexColumn)`
  width: 100vw;
  height: 100vh;
`;

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledContainer>
      <StyledFlexCenter>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </StyledFlexCenter>
      <h1>Title</h1>
      <StyledFlexColumn>
        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
      </StyledFlexColumn>
    </StyledContainer>
  );
}

export default App;
