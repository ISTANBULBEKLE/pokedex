import React, { useState } from "react";

function CaughtPokemon() {
  const [caught, setCaught] = useState([
    "salazar",
    "wurteg",
    "picachu",
    "mextoo",
  ]);

  function UpdateCaught() {
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    }
  }

  const date = new Date().toLocaleDateString();

  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
        placeholder="write a pokemon"
      />
      <button onClick={UpdateCaught}>
        Click for the number of caught Pokemon{" "}
      </button>
      <ul>
        {caught.map((item, index) => {
          return (
            <li className="li-element" key={index}>
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CaughtPokemon;
