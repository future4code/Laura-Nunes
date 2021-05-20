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
    details: "",
    showDetails: false,
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
        const userDetails = res.data;
        this.setState({ details: userDetails });
        this.onClickDetails();
        console.log(userDetails);
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
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

  onClickDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
    console.log(this.state.showDetails);
  };

  renderDetails = () => {
    return (
      <div>
        {" "}
        <p>
          Usuário: {this.state.details?.name} | E-mail:{" "}
          {this.state.details?.email}{" "}
        </p>
        <button>Deletar</button>
        <button onClick={this.props.goToUsers}>Voltar</button>
      </div>
      
    );
  };

  render() {
    const usersComponents = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p
            onClick={() => {
              this.getUserDetails(user.id);
            }}
          >
            {user.name}
          </p>
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
          <div>
            {this.state.showDetails ? this.renderDetails() : usersComponents}
          </div>
        </div>
      </Main>
    );
  }
}
