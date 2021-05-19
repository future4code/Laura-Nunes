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

  getUsers = () => {
    const header = {
      headers: {
        Authorization: "laura-campos-paiva",
      },
    };

    axios
      .get(BASE_URL, header)
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

//   deleteUser = () => {        ainda não entendi como fazer com o del
//     const header = {
//       headers: {
//         Authorization: "laura-campos-paiva",
//       },
//     };

//     axios
//         .delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', header)
//         .then((res) => {

//         })
//   };



  render() {
    const usersComponents = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button>Deletar</button>
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
