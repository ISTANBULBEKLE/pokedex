import React, { useEffect, useState } from "react";

const PokemonMoves = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState(null);

  console.log(pokemonData);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [pokemonId]);

  return pokemonData ? (
    <div>
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    </div>
  ) : null;
};

export default PokemonMoves;
