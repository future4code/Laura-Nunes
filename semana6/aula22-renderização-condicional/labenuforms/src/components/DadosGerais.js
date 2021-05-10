import React from 'react';
import styled from 'styled-components';


const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`  


class DadosGerais extends React.Component {

  render () {
    return (
      <App>
          <h3>ETAPA 1 - DADOS GERAIS</h3>

          <p>1. Qual o seu nome?</p>
          <input></input>
          <p>2. Qual sua idade?</p>
          <input></input>
          <p>3. Qual o seu email?</p>
          <input></input>
          <p>4. Qual a sua escolaridade?</p>
          <select>
              <option value="Ensino médio incompleto">Ensino médio incompleto</option>
              <option value="Ensino médio completo">Ensino médio completo</option>
              <option value="Ensino superior incompleto">Ensino superior incompleto</option>
              <option value="Ensino superior completo">Ensino superior completo</option>
          </select>
          <br></br>
          
      </App>
  
    );
  }
}

export default DadosGerais;