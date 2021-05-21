import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Header = styled.header`

`

const Nav = styled.nav`

`

const Main = styled.main`

` 

export default class SeePlaylists extends React.Component {
    state = {

    };

    componentDidMount() {
        this.getPlaylists();
    }

    getPlaylists = () => {

    }

  render () {
    return (
      <div className="App">
        <Header><h1>Biblioteca</h1></Header>
        <Nav>
            Logo
            <p>Criar Playlist</p>
            <p>Biblioteca</p>
            <button>ir para criar playlist</button>
        </Nav>
        <Main>
            
        </Main>
      </div>
    );
  }
}
  