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
  state = {
    namePlaylist: "",
  };

  handleName = (e) => {
    this.setState({ namePlaylist: e.target.value });
  };

  createPlaylist = () => {
    console.log(this.state)
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.namePlaylist,
    }
    
    axios.post (url, body, {
      headers: {
        Authorization: "laura-campos-paiva"
      } 
    })
    .then((res) => {
      console.log(res)
      alert("Playlist criada com sucesso!")
      this.setState({namePlaylist: ""})
    })
    .catch((err) => {
      console.log(err.response.data)
      alert("Ops, essa playlist já existe! Escolha outro nome :)")
    })

  
  }


  render() {
    return (
      <Main>
        <Nav>
          <button onClick={this.props.goToCreatePlaylist}>
            Criar Playlist
          </button>
          <button onClick={this.props.goToSeePlaylist}>Biblioteca</button>
        </Nav>
        <Header>
          <h1>Criar Playlist</h1>
        </Header>

        <Section>
          <h3>Insira o nome da sua playlist:</h3>
          <input
            placeholder="Nome da playlist"
            value={this.state.namePlaylist}
            onChange={this.handleName}
          />
          <button onClick={this.createPlaylist}>Criar!</button>
        </Section>
      </Main>
    );
  }
}
