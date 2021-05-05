import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'launaoexiste'}
          fotoUsuario={'https://i.ibb.co/rQ96m2N/3zwaec.jpg'}
          fotoPost={'https://picsum.photos/seed/picsum/200/150'}
        />

        <Post
          nomeUsuario={'billabrambella'}
          fotoUsuario={'https://picsum.photos/seed/picsum/50/50'}
          fotoPost={'https://picsum.photos/seed/picsun/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
