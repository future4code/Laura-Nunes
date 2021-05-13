import React from 'react';
import styled from 'styled-components';

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`  



class SemCursoSuperior extends React.Component {

  render () {
    return (
      <App>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

          <p>5. Por que você não terminou um curso de graduação?</p>
          <input></input>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option value="nenhum">Nenhum</option>
            <option value="curso técnico">Curso Técnico</option>
            <option value="curso de inglês">Curso de Inglês</option>
          </select>
          <br></br>
          
      </App>
  
    );
  }
}

export default SemCursoSuperior;