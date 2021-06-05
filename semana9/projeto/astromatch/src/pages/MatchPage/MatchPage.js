import axios from "axios";
import React, { useEffect, useState } from "react";
import { matchesUrl } from "../../constants/constants";
import { MainMatch } from "./styled";
import { List } from "./styled";
import { ListItem } from "./styled";
import { Img } from "./styled";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(matchesUrl)
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.log(err));
  };

  const listMatches = () => {
    return matches.map((match) => {
      return (
        <List key={match.id}>
          <ListItem>
            <Img src={match.photo} />
            <p>{match.name}</p>
          </ListItem>
        </List>
      );
    });
  };


  useEffect(() => {
    
    getMatches();
  }, [setMatches]);

  

  return (

  <MainMatch>
    {listMatches()}
  </MainMatch>
  
  )

};

export default MatchPage;
