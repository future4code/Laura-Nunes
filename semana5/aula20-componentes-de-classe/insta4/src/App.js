import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const DivInput = styled.div`
  display: flex;
  width: 600px;
  height: 30px;
  padding: 10px;
  justify-content: space-between;
`


class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "launaoexiste",
        fotoUsuario: "https://i.ibb.co/rQ96m2N/3zwaec.jpg",
        fotoPost: "https://picsum.photos/seed/picsum/200/150"
      },
      {
        nomeUsuario: "billabrambella",
        fotoUsuario: "https://picsum.photos/seed/picsum/50/50",
        fotoPost: "https://picsum.photos/seed/picsun/200/150"
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novoPosts });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post 
        fotoUsuario={post.fotoUsuario} 
        nomeUsuario={post.nomeUsuario}
        fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <DivInput>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
            />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto de Perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </DivInput>
          {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
