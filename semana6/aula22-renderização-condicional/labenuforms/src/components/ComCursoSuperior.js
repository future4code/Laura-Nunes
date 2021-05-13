import React from 'react';
import styled from 'styled-components';

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`  



class ComCursoSuperior extends React.Component {

  render () {
    return (
      <App>
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

          <p>5. Qual o curso?</p>
          <input></input>
          <p>6. Qual a unidade de ensino?</p>
          <input></input>
          <br></br>
          
      </App>
  
    );
  }
}

export default ComCursoSuperior;