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
    switch (this.state.currentPage) {
      case "createPlaylist":
        return <CreatePlaylist goToSeePlaylist={this.goToSeePlaylist} />
      case "seePlaylist":
        return <SeePlaylists goToCreatePlaylist={this.goToCreatePlaylist} />
      default:
        return <div>Página Inicial</div>  
    }
  }

  goToCreatePlaylist = () => {
    this.setState({currentPage: "createPlaylist"})
  }

  goToSeePlaylist = () => {
    this.setState({currentPage: "seePlaylist"})
  }


  render () {
    return (
      <div>
        {this.changePage()}
        
      </div>
    );
  }
}
  


