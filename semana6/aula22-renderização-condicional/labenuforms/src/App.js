import React from 'react';
import DadosGerais from './components/DadosGerais';
import styled from 'styled-components';
import ComCursoSuperior from './components/ComCursoSuperior';
import SemCursoSuperior from './components/SemCursoSuperior';
import Final from './components/Final';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    if (this.state.etapa === 1) {
      this.setState({ etapa: 2});
    } else if (this.state.etapa === 2) {
      this.setState({ etapa: 3})
    } else if (this.state.etapa === 3) {
      this.setState({ etapa: 4})
    }

  };

  


  render () {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <DadosGerais />;
        case 2:
          return <ComCursoSuperior />;  
        case 3: 
        return <SemCursoSuperior />; 
        case 4: 
        return <Final />;
        default:
          return <p>Não foi possível acessar</p>;
      }
    }

    return (
      <MainContainer>
      {renderizaEtapa()}

      <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      

      </MainContainer>
  
    );
  }
}

export default App;
