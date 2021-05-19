import React from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;
`;

export default class UserDetails extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const header = {
        headers: {
            Authorization: "laura-campos-paiva",
        },
    };

    axios 
    .get(url, header)
    .then((res) => {
        console.log(res);
        this.setState({ user: res.data });
    })
    .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
    });
  };


  render() {
    const userComponents = this.state.user.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button>Deletar</button>
        </div>
      );
    });

    return (
      <Main>
        <h1>Labenusers</h1>
        <button onClick={this.props.goToUsers}>Trocar de página</button>
      </Main>
    );
  }
}
