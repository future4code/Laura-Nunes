import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
height: 50px;
border-bottom: 1px solid grey;
display: flex;
justify-content: space-between;
align-items: center;
position: relative; 
padding: 0px 10px;
`

const Header = (props) => {


  return (
    <HeaderContainer>
      {/* logo astromatch */}
      <h2>Astromatch</h2>
      <button onClick={() => props.changePage()}>Trocar de página</button>
    </HeaderContainer>
  );
};

export default Header;
