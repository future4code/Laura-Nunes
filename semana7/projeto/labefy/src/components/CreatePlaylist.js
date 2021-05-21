import React from "react";
import styled from "styled-components";
import axios from "axios";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const Header = styled.header`
  grid-row: 1/5;
  justify-self: center;
`;

const Nav = styled.nav`
  display: grid;
  grid-row: 2/5;

  width: 200px;
`;

const Section = styled.section`
  grid-column: 2/5;
  justify-self: center;
`;

export default class CreatePlaylist extends React.Component {
  

  render() {
    return (
      <Main>
        <Nav>
          <button>Criar Playlist</button>
          <button onClick={this.props.changePage}>Biblioteca</button>
        </Nav>
        <Header>
          <h1>Criar Playlist</h1>
        </Header>

        <Section>
          <h3>Insira o nome da sua playlist:</h3>
          <input placeholder="Nome da playlist"></input>
          <button>Criar!</button>
        </Section>
      </Main>
    );
  }
}
