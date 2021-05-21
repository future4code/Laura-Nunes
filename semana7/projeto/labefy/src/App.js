import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylist from "./components/CreatePlaylist";
import SeePlaylists from "./components/SeePlaylists";


export default class App extends React.Component {
  state = {
    currentPage: "createPlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "createPlaylist") {
      this.setState({ currentPage: "seePlaylists"});
    } else {
      this.setState({ currentPage: "createPlaylist"})
    }
  };

  render () {
    return (
      <div>
        {this.setState.currentPage === "createPlaylist" ? <SeePlaylists /> : <CreatePlaylist />}
      </div>
    );
  }
}
  


