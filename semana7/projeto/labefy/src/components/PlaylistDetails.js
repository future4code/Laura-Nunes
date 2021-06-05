import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class PlaylistDetails extends React.Component {
  state = {
      playlistDetails: {},
    //   userEdition: "editButton",
  };

  componentDidMount() {
    this.getPlaylistDetails();
  }

  getPlaylistDetails = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: "laura-campos-paiva",
        },
      })
      .then((res) => {
        console.log(res.data.result.tracks);
        this.setState({ playlistDetails: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  changeUserEditionFiel = () => {
    if (this.state.userEdition === "editButton") {
      this.setState({ userEdition: "userEditForm" });
    } else {
      this.setState({ userEdition: "editButton" });
    }
  };

  
    

  render() {
    //   console.log(this.state.playlistDetails)
    // const listDetails = this.state.playlistDetails.map((playlistDetails) => {
    //     return (
    //         <div>
    //             {playlistDetails}
    //         </div>
    //     );
    // })
        
    // const userEdition =
    //   this.state.userEdition === "editButton" ? (
    //     <button onClick={this.changeUserEditionFiel}>Editar usuário</button>
    //   ) : (
    //     <div>
    //       <input
    //         placeholder="Nome"
    //         type="text"
    //         value={this.state.name}
    //         onChange={this.handleNameChange}
    //       />
    //       <input
    //         placeholder="E-mail"
    //         type="email"
    //         value={this.state.email}
    //         onChange={this.handleEmailChange}
    //       />
    //       <button onClick={this.handleCreateUser}>Salvar edição</button>
    //     </div>
    //   );

    return (
      <div>
        <h1> (Pegar nome da playlist)</h1>
        <section>
          {/* {listDetails} */}

          <button>Voltar para playlists</button>
          {/* colocar função no button */}
        </section>
      </div>
    );
  }
}
