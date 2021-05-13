import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';


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

          <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2. Qual sua idade?"} />
          <PerguntaAberta pergunta={"3. Qual seu email?"} />
          <PerguntaFechada pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo" 
          ]} />                 
      </App>
  
    );
  }
}

export default DadosGerais;