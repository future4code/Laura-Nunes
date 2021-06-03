import axios from "axios";
import React, { useEffect, useState } from "react";
import { matchesUrl, profileUrl } from "../../constants/constants";
import { MainMatch } from "./styled";
import { List } from "./styled";
import { ListItem } from "./styled";
import { Img } from "./styled";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = () => {
      axios
        .get(matchesUrl)
        .then((res) => setMatches(res.data.matches))
        .catch((err) => console.log(err));
    };
    getMatches();
  }, [setMatches, matchesUrl]);

  const listMatches = () => {
    matches.map((match) => {
      return (
        <List>
          <ListItem>
            <Img src="{match.photo}" />
            <p>{match.name}</p>
          </ListItem>
        </List>
      );
    });
  };

  return (

  <MainMatch>
    {listMatches()}
  </MainMatch>
  
  )

};

export default MatchPage;
