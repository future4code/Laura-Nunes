import React from "react";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import { HeaderContainer, Logo } from "../components/styled";


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
