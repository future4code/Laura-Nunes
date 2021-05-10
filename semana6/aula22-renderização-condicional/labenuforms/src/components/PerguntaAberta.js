import React from 'react';
import styled from 'styled-components';

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`  


class PerguntaAberta extends React.Component {

  render () {
    return (
      <App>
          <p>{pergunta}</p>
          <input></input>
      </App>
  
    );
  }
}

export default PerguntaAberta;