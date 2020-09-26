import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>Best Pokemon for me is X</p>
      <ul>
        {abilities.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
