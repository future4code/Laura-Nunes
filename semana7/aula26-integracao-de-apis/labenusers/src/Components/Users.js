import React from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;
`;

const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class Users extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  // getUsers = () => {
  //   const header = {
  //     headers: {
  //       Authorization: "laura-campos-paiva",
  //     },
  //   };

  //   axios
  //     .get(BASE_URL, header)
  //     .then((res) => {
  //       // console.log(res);
  //       this.setState({ users: res.data });
  //     })
  //     .catch((err) => {
  //       alert("Occorreu um problema, tente novamente");
  //     });
  // };

  getUsers = async () => {
    try {
      const res = await axios.get(BASE_URL, {
        headers: {
          Authorization: "laura-campos-paiva",
        },
      });

      this.setState({ users: res.data });
    } catch (err) {
      alert("Ocorreu um problema, tente novamente");
    }
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const header = {
      headers: {
        Authorization: "laura-campos-paiva",
      },
    };

    if (window.confirm("Tem certeza que quer deletar este usuário?")) {
      axios
        .delete(url, header)
        .then((res) => {
          alert("Usuário(a) deletado(a) com sucesso!");
          this.getUsers();
        })
        .catch((err) => {
          alert("Ocorreu um erro, tente novamente");
        });
    }
  };

  render() {
    const usersComponents = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p onClick={this.props.goToDetails}>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </div>
      );
    });

    return (
      <Main>
        <h1>Labenusers</h1>
        <button onClick={this.props.goToHome}>Trocar de página</button>

        <div>
          <h2>Lista de Usuários</h2>

          {usersComponents}
        </div>
      </Main>
    );
  }
}
