import React, { useState } from "react";

function CaughtPokemon() {
  const [caught, setCaught] = useState([
    "salazar",
    "wurteg",
    "picachu",
    "mextoo",
  ]);

  function UpdateCaught() {
    setCaught(caught.concat("newtoo"));
  }

  const date = new Date().toLocaleDateString();
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
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
