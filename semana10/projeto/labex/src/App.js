import React from "react";
import Router from "./routes/Router";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 0px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};

export default App;
