import React from "react";
import styled from "styled-components";

const MainMatch = styled.div``;

const List = styled.ul`
padding: 0px 10px;
`

const ListItem = styled.li`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: all 0.2s ease 0s;
  cursor: pointer;
`;

const Img = styled.img`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

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
