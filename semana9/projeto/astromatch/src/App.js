import React, { useState } from "react";
import Home from "./pages/Home/Home";
import MatchPage from "./pages/MatchPage/MatchPage";
import styled from "styled-components";
import Header from "./components/Header";
import { ButtonClear } from "./components/ButtonClear";

const Main = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const goToHome = () => {
    setCurrentPage("home");
  };

  const goToMatchPage = () => {
    setCurrentPage("matchPage");
  };

  return (
    <Main>
      <Container>
        <Header goToHome={goToHome} goToMatchPage={goToMatchPage} />
        {currentPage === "home" ? <Home /> : <MatchPage />}
      </Container>
      <ButtonClear />
    </Main>
  );
};

export default App;
