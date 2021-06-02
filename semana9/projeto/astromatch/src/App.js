import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import MatchPage from "./pages/MatchPage/MatchPage";
import styled from "styled-components";
import Header from "./components/Header";

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

  const changePage = () => {
    if (currentPage === "home") {
      setCurrentPage("matchPage");
    } else {
      setCurrentPage("home");
    }
  };

  return (
    <Main>
      <Container>
        <Header changePage={changePage} />
        {currentPage === "home" ? <Home /> : <MatchPage />}
      </Container>
      <button>Limpar matchs</button>
    </Main>
  );
};

export default App;
