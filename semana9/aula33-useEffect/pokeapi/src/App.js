import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from "styled-components";

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px;
`

const App = () => {
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokename] = useState("")

  useEffect(() => {
    const pegaPokemons = () => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPokelist(res.data.results))
      .catch((err) => console.log(err))
    };
    pegaPokemons();
  }, [setPokelist]);

 const mudaPokeName = (event) => {
    setPokename(event.target.value)
  }

  return (
    <Main>
     <select onChange={mudaPokeName}>
       <option value={""}>Nenhum</option>
       {pokeList.map(pokemon => {
         return (
           <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
         );
       })}
     </select>
     {pokeName && <PokeCard pokemon={pokeName}/>}

    </Main>
  );
}

export default App;
