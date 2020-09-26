import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
// import App from './App';
import Logo, { NewName } from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

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
    </div>
  );
}

export default App;
