import React from "react";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div`
  text-align: center;
`;

const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class Home extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
  };

  handleName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  createUser = () => {
    const header = {
      headers: {
        Authorization: "laura-campos-paiva",
      },
    };

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios.post(BASE_URL, body, header).then(() => {
      alert("Usuário criado com sucesso");
      this.setState({ inputName: "" });
      this.setState({ inputEmail: "" });
    });
  };

  render() {
    
    return (
      <Main>
        <h1>Labenusers</h1>
        <button onClick={this.props.goToUsers}>Trocar de página</button>

        <div>
          <h2>Criar usuário</h2>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.handleName}
          ></input>
          <input
            placeholder="E-mail"
            value={this.state.inputEmail}
            onChange={this.handleEmail}
          ></input>
          <button onClick={this.createUser}>Criar</button>
        </div>
      </Main>
    );
  }
}
