import React from "react";
import styled from "styled-components";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";

const HeaderContainer = styled.div`
  height: 50px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 10px;
`;

const Logo = styled.img`
  width: 35%;
`;

const Header = (props) => {
  
  return (
    <HeaderContainer>
      <GroupAddTwoToneIcon 
        color="primary" 
        onClick={() => props.goToHome()}
        />
      <Logo src="https://i.ibb.co/6PQfcms/download.png"></Logo>
      <FavoriteTwoToneIcon
        color="secondary"
        onClick={() => props.goToMatchPage()}
      />
    </HeaderContainer>
  );
};

export default Header;
