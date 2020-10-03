import React, { useState } from "react";
import "./index.css";
import Logo, { NewName } from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function logWhenClicked() {
  console.log("Button was clicked!");
}

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div className="headingWithImg">
      {" "}
      <Logo
        callLogo={logWhenClicked}
        appName="Pokedex"
        appName2="Huseein"
      />{" "}
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
