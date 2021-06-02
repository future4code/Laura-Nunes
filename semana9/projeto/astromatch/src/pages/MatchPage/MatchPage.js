import React from "react";
import { MainMatch } from "./styled";
import { List } from "./styled";
import { ListItem } from "./styled";
import { Img } from "./styled";


const MatchPage = () => {
  return (
    <MainMatch>
      <List>
        <ListItem>
          <Img src="https://www.writeups.org/wp-content/uploads/Sally-Nightmare-Before-Christmas.jpg" />
          <p>Nome</p>
        </ListItem>
      </List>
    </MainMatch>
  );
};

export default MatchPage;
