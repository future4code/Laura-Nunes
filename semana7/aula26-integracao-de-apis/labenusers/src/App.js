import React from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;

`
const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";


export default class App extends React.Component {
  
  state = {
    users: [],
    inputName: "",
    inputEmail: ""
  }

  handleName = (e) => {
    this.setState({ inputName: e.target.value });
  }

  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  }

  getUsers = () => {
    const header = {
      headers: {
        Authorization: "laura-campos-paiva"
      }
    };

    axios
    .get(BASE_URL, header)
    .then((res) => {
      this.setState({ users: res.data.result.list });
    })
    .catch((err) => {
      alert(err.response.data);
    });
  };

  createUser = () => {
    const header = {
      headers: {
        Authorization: "laura-campos-paiva"
      }
    };

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
    .post(BASE_URL, body, header)
    .then(() => {
      alert("Usuário criado com sucesso");
      this.setState({ inputName: ""});
      
    })
    
  }

  render () {
    const userComponents = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });


    return (
      <Main>
        <h1>Labenusers</h1>
        <button>Trocar de página</button>

        <div>
          <h2>Criar usuário</h2>
          <input placeholder="Nome" value={this.state.inputName}></input>
          <input placeholder="E-mail"></input>
          <button onClick={this.createUser}>Criar</button>
        </div>  
        // Essa vai ser a página de usuário que retorna o usuário criado
        {userComponents}      
      </Main>
    );
  }  
}

  

