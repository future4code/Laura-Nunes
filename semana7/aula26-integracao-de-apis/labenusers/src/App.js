import React from "react";
import axios from "axios";
import styled from "styled-components";
import Home from "./Components/Home";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";

export default class App extends React.Component {
  state = {
    pagina: "home",
  };

  goToHome = () => {
    this.setState({ pagina: "home" });
  };

  goToUsers = () => {
    this.setState({ pagina: "users" });
  };

  goToDetails = () => {
    this.setState({ pagina: "details"})
  };

  // ou switch case:
  // renderPage = () => {
  //   switch (this.state.pagina) {
  //     case "home":
  //       return <Home goToHome={this.goToHome}/>
  //     case "users":
  //       return <Users goToUsers={this.goToUsers}/>
  //     default:
  //       return <div>Erro! Página não encontrada</div>
  //   }
  // }

  render() {
    const renderPage = () => {
      if (this.state.pagina === "home")
        return <Home goToUsers={this.goToUsers} />;

      if (this.state.pagina === "users")
        return <Users goToDetails={this.goToDetails} goToHome={this.goToHome} />;
      
      if (this.state.pagina === "details")
        return <UserDetails goToUsers={this.goToUsers} />;
    };

    return <div className="App">{renderPage()}</div>;

    // <div>
    //  {this.renderPage()}
    // </div>
  }
}
