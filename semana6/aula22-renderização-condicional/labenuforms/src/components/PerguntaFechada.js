import React from 'react';
import styled from 'styled-components';

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`  


class PerguntaFechada extends React.Component {

  render () {
    return (
      <App>
          <p>{pergunta}</p>
          <select>{opcoes.map((opcao) => {
              return <option value={opcao}>{opcao}</option>
          }
          
          )}  </select>      
      </App>
  
    );
  }
}

export default PerguntaFechada;