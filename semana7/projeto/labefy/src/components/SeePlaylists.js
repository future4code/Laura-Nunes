import React from "react";
import styled from "styled-components";
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails";

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
  width: 500px;
`;

const CardPlaylists = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

export default class SeePlaylists extends React.Component {
  state = {
    playlists: [],
    currentPage: "seePLaylists",
    playlistId: "",
  };

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "laura-campos-paiva",
        },
      })
      .then((res) => {
        console.log(res.data.result.list);
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err);
        alert("Deu ruim, tente novamente!");
      });
  };

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

    if (window.confirm("Tem certeza que quer deletar essa playlist?")) {
      axios
        .delete(url, {
          headers: {
            Authorization: "laura-campos-paiva",
          },
        })
        .then(() => {
          alert("Playlist deletada com sucesso!");
          this.getPlaylists();
        })
        .catch((err) => {
          console.log(err.response.data);
          alert("Deu ruim! Tente novamente.");
        });
    }
  };

  // goToSeePlaylist = () => {
  //   this.setState({currentPage: "seePlaylist"})
  // }

  goToPlaylistDetails = (playlistId) => {
    this.setState({ currentPage: "playlistDetails", playlistId: playlistId });
  };

  render() {
    console.log(this.state.playlists);
    const listPlaylists = this.state.playlists.map((playlist) => {
      return (
        <CardPlaylists
          
          key={playlist.id}
        >
          <p onClick={() => this.goToPlaylistDetails(playlist.id)}>{playlist.name}</p>
          <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
        </CardPlaylists>
      );
    });

    return (
      <Main>
        <Nav>
          <button onClick={this.props.goToCreatePlaylist}>
            Criar Playlist
          </button>
          <button onClick={this.props.goToSeePlaylist}>Biblioteca</button>
        </Nav>
        <Header>
          <h1>Ver Playlists</h1>
        </Header>

        <Section>
          {this.state.currentPage === "seePLaylists" && listPlaylists}
        </Section>
        <Section>
          {this.state.currentPage === "playlistDetails" && (
            <PlaylistDetails playlistId={this.state.playlistId} changePage={this.changePage} />
          )}
        </Section>
      </Main>
    );
  }
}
