import React from 'react';
import styled from 'styled-components';

const App = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`  



class Final extends React.Component {

  render () {
    return (
      <App>
          <h3>O FORMULÁRIO ACABOU</h3>

          <p>Muito obrigado por participar! Entraremos em contato!</p>

      </App>
  
    );
  }
}

export default Final;