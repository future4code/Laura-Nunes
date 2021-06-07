import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });        
  };

  useEffect(() => {
   

    pegaPokemon(); 
  }, [props.pokemon]);



  return (
    <div>
      <p>Nome do Pokemon: {pokemon.name}</p>
      <p>Peso do Pokemon: {pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt= {pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
