import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class PlaylistDetails extends React.Component {
  state = {

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


  render() {
    console.log(this.state.playlistDetails);
    // const listDetails = this.state.playlistDetails.map((playlist) => {
    //     return (
    //         <div>
    //            {playlist}
    //         </div>
    //     )
    // })
    return (
      <div>
        <h1> {this.props.playlist.name}</h1>
        <section>
          {/* {listDetails} */}
          <button onClick={this.props.changePage}>
            Voltar para playlists
          </button>
        </section>
      </div>
    );
  }
}
