import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>Best Pokemon for me is Salazar</p>
      <ul>
        {abilities.map((item, index) => (
          <li className="pok-list-ele" key={index}>
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
